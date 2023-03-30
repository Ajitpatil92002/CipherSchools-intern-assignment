import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import USER from "../../api";
import { useAppSelector } from "../../redux/hooks";

export default function AboutMe() {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const userContext = useContext(UserContext);
  
  const { token, userDetails } = useAppSelector((state) => state.user);

  const handleEditAbout = async () => {
    if (userDetails) {
      try {
        const resp = await USER.edit(token, userDetails?._id, {
          about: userContext?.user?.about,
        });
        const data = resp.data;
        userContext?.dispatch({ type: "SET_STATE", payload: { ...data } });
      } catch (error) {
        console.log(error);
        alert("error");
      }
    }
  };

  return (
    <div className="about-conatiner m-4 flex justify-center  flex-col">
      <div className="about-top flex justify-between items-center p-4">
        <h3 className="text-text-color2 text-xl font-bold">About Me</h3>
        {!isEdit ? (
          <button
            onClick={() => setIsEdit(true)}
            className="px-8 py-1  bg-brand-color text-white rounded-md hover:bg-opacity-90"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleEditAbout}
            className="px-8 py-1  bg-brand-color text-white rounded-md hover:bg-opacity-90 disabled:cursor-not-allowed disabled:opacity-80"
          >
            save
          </button>
        )}
      </div>
      <div>
        <textarea
          name=""
          id=""
          className="h-40 w-full rounded-md outline-none bg-background resize-none text-paragraph p-5 disabled:cursor-not-allowed"
          disabled={!isEdit}
          onChange={(e) => {
            userContext?.dispatch({
              type: "SET_ABOUT",
              payload: e.target.value,
            });
          }}
          value={userContext?.user?.about ?? ""}
        ></textarea>
      </div>
    </div>
  );
}
