import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useAppSelector } from "../../redux/hooks";
import USER from "../../api";

export default function ProfessionalInfo() {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const userContext = useContext(UserContext);

  const { token, userDetails } = useAppSelector((state) => state.user);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    userContext?.dispatch({
      type: "SET_PROFESSIONAL_INFO",
      payload: { key: name, value },
    });
  };

  const handleEdit = async () => {
    if (userDetails) {
      try {
        const resp = await USER.edit(token, userDetails?._id, {
          professionalInfo: { ...userContext?.user?.professionalInfo },
        });
        const data = resp.data;
        userContext?.dispatch({ type: "SET_STATE", payload: { ...data } });
        setIsEdit(!isEdit);
      } catch (error) {
        console.log(error);
        alert("error");
      }
    }
  };

  return (
    <div className="professional-info-conatiner m-4 flex justify-center  flex-col">
      <div className="web-links-top flex justify-between items-center p-4">
        <h3 className="text-text-color2 text-xl font-bold">
          PROFESSIONAL INFORMATION
        </h3>
        {!isEdit ? (
          <button
            onClick={() => setIsEdit(true)}
            className="px-8 py-1  bg-brand-color text-white rounded-md hover:bg-opacity-90"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="px-8 py-1  bg-brand-color text-white rounded-md hover:bg-opacity-90 disabled:cursor-not-allowed disabled:opacity-80"
          >
            save
          </button>
        )}
      </div>
      <div>
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 px-4">
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="Highest education" className="text-base text-white">
              Highest education
            </label>
            <div className="bg-background text-paragraph p-2 px-4 mt-4 rounded-md flex items-center justify-start space-x-1">
              <select
                onChange={handleChange}
                name="highestEducation"
                disabled={!isEdit}
                value={
                  userContext?.user?.professionalInfo.highestEducation ?? ""
                }
                className="appearance-none outline-none  w-full py-1 px-2 bg-background text-paragraph"
              >
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary </option>
                <option value="HigherSecondary"> Higher Secondary </option>
                <option value="Graduation"> Graduation </option>
                <option value="PostGraduation"> Post Graduation </option>
              </select>

              <span>
                <img
                  width={100}
                  height={100}
                  src="https://www.cipherschools.com/static/media/BottomArrow.ecc4e39cf0b7dd9d466af346b29bcddd.svg"
                  className={"h-4 w-4"}
                />
              </span>
            </div>
          </div>
          <div className="col-span-full sm:col-span-3">
            <label
              htmlFor="What do you do currently?"
              className="text-base text-white"
            >
              What do you do currently?
            </label>
            <div className="bg-background text-paragraph p-2 px-4 mt-4 rounded-md flex items-center justify-start space-x-1">
              <select
                name="currentOccupation"
                onChange={handleChange}
                disabled={!isEdit}
                value={
                  userContext?.user?.professionalInfo.currentOccupation ?? ""
                }
                className="appearance-none outline-none w-full py-1 px-2 bg-background text-paragraph"
              >
                <option value="Schooling">Schooling</option>
                <option value="College Student">College Student </option>
                <option value="Teaching"> Teaching </option>
                <option value="Job"> Job </option>
                <option value="Freelancing">Freelancing </option>
              </select>
              <span>
                <img
                  width={100}
                  height={100}
                  src="https://www.cipherschools.com/static/media/BottomArrow.ecc4e39cf0b7dd9d466af346b29bcddd.svg"
                  className={"h-4 w-4"}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
