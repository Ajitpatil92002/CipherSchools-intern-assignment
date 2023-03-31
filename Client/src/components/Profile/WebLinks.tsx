import { useContext, useState } from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsGlobe, BsPencilFill } from "react-icons/bs";
import { UserContext } from "../../context/userContext";
import { useAppSelector } from "../../redux/hooks";
import USER from "../../api";
import toastify from "../../utils";

export default function WebLinks() {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const userContext = useContext(UserContext);

  const { token, userDetails } = useAppSelector((state) => state.user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    userContext?.dispatch({
      type: "SET_WEBLINK",
      payload: { key: name, value },
    });
  };

  const handleEdit = async () => {
    if (userDetails) {
      try {
        const resp = await USER.edit(token, userDetails?._id, {
          webLinks: { ...userContext?.user?.webLinks },
        });
        const data = resp.data;
        userContext?.dispatch({ type: "SET_STATE", payload: { ...data } });
        setIsEdit(!isEdit);
        toastify.success("WebLinks Updated");
      } catch (error) {
        console.log(error);
        alert("error");
        toastify.success("WebLinks not Updated");
      }
    }
  };

  return (
    <div className="web-links-conatiner m-4 flex justify-center  flex-col">
      <div className="web-links-top flex justify-between items-center p-4">
        <h3 className="text-text-color2 text-xl font-bold">Web Links</h3>
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
            <label htmlFor="ninkedIn" className="text-base text-white">
              LinkedIn
            </label>
            <div className="bg-background text-paragraph p-2 px-4 mt-4 rounded-md flex items-center justify-start space-x-1">
              <span className="p-2 bg-select-cont rounded-full">
                <AiFillLinkedin
                  width={100}
                  height={100}
                  fill={"#262c36"}
                  className={"h-4 w-4"}
                />
              </span>
              <input
                type="text"
                name="linkedIn"
                placeholder="linkedIn"
                value={userContext?.user?.webLinks.linkedIn ?? ""}
                onChange={handleChange}
                disabled={!isEdit}
                className=" w-full rounded-md outline-none bg-background"
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
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="github" className="text-base text-white">
              Github
            </label>
            <div className="bg-background text-paragraph p-2 px-4 mt-4 rounded-md flex items-center justify-start space-x-1">
              <span className="p-2 bg-select-cont rounded-full">
                <AiFillGithub
                  width={100}
                  height={100}
                  fill={"#262c36"}
                  className={"h-4 w-4"}
                />
              </span>
              <input
                type="text"
                name="github"
                placeholder="github"
                onChange={handleChange}
                value={userContext?.user?.webLinks.github ?? ""}
                disabled={!isEdit}
                className=" w-full rounded-md outline-none bg-background"
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
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="facebook" className="text-base text-white">
              Facebook
            </label>
            <div className="bg-background text-paragraph p-2 px-4 mt-4 rounded-md flex items-center justify-start space-x-1">
              <span className="p-2 bg-select-cont rounded-full">
                <AiFillFacebook
                  width={100}
                  height={100}
                  fill={"#262c36"}
                  className={"h-4 w-4"}
                />
              </span>
              <input
                type="text"
                name="facebook"
                placeholder="facebook"
                onChange={handleChange}
                value={userContext?.user?.webLinks.facebook ?? ""}
                disabled={!isEdit}
                className=" w-full rounded-md outline-none bg-background"
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
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="twitter" className="text-base text-white">
              Twitter
            </label>
            <div className="bg-background text-paragraph p-2 px-4 mt-4 rounded-md flex items-center justify-start space-x-1">
              <span className="p-2 bg-select-cont rounded-full">
                <AiFillTwitterCircle
                  width={100}
                  height={100}
                  fill={"#262c36"}
                  className={"h-4 w-4"}
                />
              </span>
              <input
                type="text"
                name="twitter"
                placeholder="twitter"
                onChange={handleChange}
                value={userContext?.user?.webLinks.twitter ?? ""}
                disabled={!isEdit}
                className=" w-full rounded-md outline-none bg-background"
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
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="instagram" className="text-base text-white">
              Instagram
            </label>
            <div className="bg-background text-paragraph p-2 px-4 mt-4 rounded-md flex items-center justify-start space-x-1">
              <span className="p-2 bg-select-cont rounded-full">
                <AiFillInstagram
                  width={100}
                  height={100}
                  fill={"#262c36"}
                  className={"h-4 w-4"}
                />
              </span>
              <input
                type="text"
                name="instagram"
                onChange={handleChange}
                value={userContext?.user?.webLinks.instagram ?? ""}
                disabled={!isEdit}
                placeholder="Instagram"
                className=" w-full rounded-md outline-none bg-background"
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
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="website" className="text-base text-white">
              Website
            </label>
            <div className="bg-background text-paragraph p-2 px-4 mt-4 rounded-md flex items-center justify-start space-x-1">
              <span className="p-2 bg-select-cont rounded-full">
                <BsGlobe
                  width={100}
                  height={100}
                  fill={"#262c36"}
                  className={"h-4 w-4"}
                />
              </span>
              <input
                type="text"
                name="website"
                onChange={handleChange}
                value={userContext?.user?.webLinks.website ?? ""}
                disabled={!isEdit}
                placeholder="Website"
                className=" w-full rounded-md outline-none bg-background"
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
        </div>
      </div>
    </div>
  );
}
