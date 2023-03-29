import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsGlobe, BsPencilFill } from "react-icons/bs";

export default function WebLinks() {
  return (
    <div className="web-links-conatiner m-4 flex justify-center  flex-col">
      <div className="web-links-top flex justify-between items-center p-4">
        <h3 className="text-text-color2 text-xl font-bold">Web Links</h3>
        <button className="px-8 py-1  bg-brand-color text-white rounded-md hover:bg-opacity-90">
          Edit
        </button>
      </div>
      <div>
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 px-4">
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="LinkedIn" className="text-base text-white">
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
                name="LinkedIn"
                placeholder="LinkedIn"
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
            <label htmlFor="Github" className="text-base text-white">
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
                name="Github"
                placeholder="Github"
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
            <label htmlFor="Facebook" className="text-base text-white">
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
                name="Facebook"
                placeholder="Facebook"
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
            <label htmlFor="Twitter" className="text-base text-white">
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
                name="Twitter"
                placeholder="Twitter"
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
            <label htmlFor="Instagram" className="text-base text-white">
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
                name="Instagram"
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
            <label htmlFor="Website" className="text-base text-white">
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
                name="Website"
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
