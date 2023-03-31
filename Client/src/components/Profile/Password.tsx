import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useAppSelector } from "../../redux/hooks";
import { BsPencilFill } from "react-icons/bs";
import Model from "../Model";
import USER from "../../api";
import toastify from "../../utils";

export default function Password() {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [password, setPassword] = useState("");
  const [newpassword, setnewPassword] = useState("");

  const userContext = useContext(UserContext);

  const { token, userDetails } = useAppSelector((state) => state.user);

  const handleEdit = async () => {
    if (userDetails) {
      try {
        const resp = await USER.resetPassword(token, userDetails?._id, {
          newpassword,
          password,
          email: userContext?.user?.email,
        });
        const data = resp.data;
        userContext?.dispatch({ type: "SET_STATE", payload: { ...data } });
        toastify.success("password Updated");
        setIsEdit(!isEdit);
      } catch (error) {
        console.log(error);
        toastify.error("password not Updated");
      }
    }
  };

  return (
    <>
      <div className="password-conatiner m-4 flex justify-center  flex-col">
        <div className="web-links-top flex justify-between items-center p-4">
          <h3 className="text-text-color2 text-xl font-bold">
            PASSWORD & SECURITY
          </h3>
          <button
            onClick={() => setIsEdit(true)}
            className="px-8 py-1  bg-brand-color text-white rounded-md hover:bg-opacity-90"
          >
            Edit
          </button>
        </div>
        <div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 px-4">
            <div className="col-span-full">
              <label
                htmlFor="Highest education"
                className="text-base text-white"
              >
                Password
              </label>
              <div className="bg-background text-paragraph p-2 px-4 mt-4 rounded-md flex items-center justify-start space-x-1">
                <input
                  type="text"
                  name="password"
                  disabled
                  placeholder="password"
                  className=" w-full rounded-md outline-none bg-background"
                />
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
                <label htmlFor="password" className="text-base text-white">
                  password
                </label>
                <div className="bg-second-white text-paragraph p-2 px-4 mt-4 rounded-md flex items-center justify-start space-x-1">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                <label htmlFor="newpassword" className="text-base text-white">
                  new Password
                </label>
                <div className="bg-second-white text-paragraph p-2 px-4 mt-4 rounded-md flex items-center justify-start space-x-1">
                  <input
                    type="newpassword"
                    name="newpassword"
                    placeholder="newpassword"
                    value={newpassword}
                    onChange={(e) => setnewPassword(e.target.value)}
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
