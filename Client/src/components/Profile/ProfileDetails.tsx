import { useContext, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import Model from "../Model";
import { UserContext } from "../../context/userContext";
import { BsPencilFill } from "react-icons/bs";
import USER from "../../api";
import toastify from "../../utils";

export default function ProfileDetails() {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const userContext = useContext(UserContext);

  const { token, userDetails } = useAppSelector((state) => state.user);

  const handleEdit = async () => {
    if (userDetails) {
      try {
        const resp = await USER.edit(token, userDetails?._id, {
          name: userContext?.user?.name,
          email: userContext?.user?.email,
        });
        const data = resp.data;
        userContext?.dispatch({ type: "SET_STATE", payload: { ...data } });
        toastify.success("User Details Updated");
        setIsEdit(!isEdit);
      } catch (error) {
        console.log(error);
        toastify.error("User Details not Updated something error");
      }
    }
  };

  return (
    <>
      <div className="pf-user-box  bg-profile-cover h-28 w-full">
        <div className="pf-user-back">
          <div className="profile-conatiner h-full w-full p-4 flex justify-start items-center gap-4 bg-gradient-to-r from-sendbg-second-white via-transparent to-sendbg-second-white">
            <div className="profile-img">
              <img
                src="./userProfile.png"
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start"
              />
            </div>
            <div className="profile-content flex flex-1 justify-between items-center text-text-color2">
              <div className="user-details flex items-center">
                <div>
                  <h2 className="text-xl">Hello,</h2>
                  <h1 className="text-xl font-semibold">
                    {userContext?.user?.name}
                  </h1>
                  <h2 className="text-xl">{userContext?.user?.email}</h2>
                </div>
                <div className="ml-6">
                  <button
                    onClick={() => setIsEdit(true)}
                    className="px-8 py-1  bg-brand-color text-white rounded-md hover:bg-opacity-90"
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div className="user-followers hidden xl:block">
                <h2 className="text-xl">0 followers</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isEdit && (
        <Model CloseModel={() => setIsEdit(!isEdit)}>
          <>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 px-4">
              <div className="col-span-full ">
                <label htmlFor="email" className="text-base text-white">
                  Name
                </label>
                <div className="bg-second-white text-paragraph p-2 px-4 mt-4 rounded-md flex items-center justify-start space-x-1">
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={userContext?.user?.name ?? ""}
                    onChange={(e) =>
                      userContext?.dispatch({
                        type: "SET_NAME",
                        payload: e.target.value,
                      })
                    }
                    disabled={!isEdit}
                    className=" w-full rounded-md outline-none bg-second-white"
                  />
                  <span>
                    <BsPencilFill
                      width={100}
                      height={100}
                      stroke={"#262c36"}
                      className={"h-4 w-4"}
                    />
                  </span>
                </div>
              </div>
              <div className="col-span-full ">
                <label htmlFor="email" className="text-base text-white">
                  Email
                </label>
                <div className="bg-second-white text-paragraph p-2 px-4 mt-4 rounded-md flex items-center justify-start space-x-1">
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={userContext?.user?.email ?? ""}
                    onChange={(e) =>
                      userContext?.dispatch({
                        type: "SET_EMAIL",
                        payload: e.target.value,
                      })
                    }
                    disabled={!isEdit}
                    className=" w-full rounded-md outline-none bg-second-white "
                  />
                  <span>
                    <BsPencilFill
                      width={100}
                      height={100}
                      stroke={"#262c36"}
                      className={"h-4 w-4"}
                    />
                  </span>
                </div>
              </div>
              <button
                onClick={handleEdit}
                className="col-span-full px-8 py-1 w-full text-center bg-brand-color text-white rounded-md hover:bg-opacity-90 disabled:cursor-not-allowed disabled:opacity-80"
              >
                save
              </button>
            </div>
          </>
        </Model>
      )}
    </>
  );
}
