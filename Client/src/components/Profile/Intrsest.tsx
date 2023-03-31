import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useAppSelector } from "../../redux/hooks";
import USER from "../../api";
import Model from "../Model";
import toastify from "../../utils";

export default function Intrsest() {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const userContext = useContext(UserContext);

  const { token, userDetails } = useAppSelector((state) => state.user);

  const handleChange = (item: string) => {
    userContext?.dispatch({
      type: "SET_INTERESTS",
      payload: [item],
    });
  };

  const handleEdit = async () => {
    if (userDetails) {
      try {
        const resp = await USER.edit(token, userDetails?._id, {
          interests: [...(userContext?.user?.interests ?? "")],
        });
        const data = resp.data;
        userContext?.dispatch({ type: "SET_STATE", payload: { ...data } });
        setIsEdit(!isEdit);
        toastify.success("Updated");
      } catch (error) {
        console.log(error);
        toastify.success("not Updated someting error");
      }
    }
  };

  return (
    <>
      <div className="Intrest-conatiner m-4 flex justify-center  flex-col">
        <div className="web-links-top flex justify-between items-center p-4">
          <h3 className="text-text-color2 text-xl font-bold">INTERESTS</h3>
          <button
            onClick={() => setIsEdit(!isEdit)}
            className="px-8 py-1  bg-brand-color text-white rounded-md hover:bg-opacity-90"
          >
            Edit
          </button>
        </div>
        <div>
          <div className="flex flex-row items-center justify-start flex-wrap">
            {userContext?.user?.interests
              .filter((value, index, array) => array.indexOf(value) === index)
              .map((value, index) => {
                return (
                  <div
                    key={index}
                    className="px-6 py-2 text-brand-color bg-brand-color-shade rounded-md ml-2 mt-2"
                  >
                    {value}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {isEdit && (
        <Model CloseModel={() => setIsEdit(!isEdit)}>
          <>
            <div>
              <div className="flex items-center flex-wrap">
                <div
                  onClick={() => handleChange("Web Developement")}
                  className="px-6 py-2 bg-second-white hover:bg-brand-color active:bg-brand-color  rounded-md ml-2 mt-2"
                >
                  Web Developement
                </div>
                <div
                  onClick={() => handleChange("App Developement")}
                  className="px-6 py-2 bg-second-white hover:bg-brand-color active:bg-brand-color  rounded-md ml-2 mt-2"
                >
                  App Developement
                </div>
                <div
                  onClick={() => handleChange(" Data Science")}
                  className="px-6 py-2 bg-second-white hover:bg-brand-color active:bg-brand-color rounded-md ml-2 mt-2"
                >
                  Data Science
                </div>
                <div
                  onClick={() => handleChange(" Data Structure")}
                  className="px-6 py-2 bg-second-white hover:bg-brand-color active:bg-brand-color rounded-md ml-2 mt-2"
                >
                  Data Structure
                </div>
              </div>
              <div
                onClick={handleEdit}
                className="px-6 py-2 w-20 bg-brand-color hover:bg-opacity-80 rounded-md ml-2 mt-2"
              >
                save
              </div>
            </div>
          </>
        </Model>
      )}
    </>
  );
}
