
export default function AboutMe() {
  return <div className="about-conatiner m-4 flex justify-center  flex-col">
  <div className="about-top flex justify-between items-center p-4">
    <h3 className="text-text-color2 text-xl font-bold">About Me</h3>
    <button className="px-8 py-1  bg-brand-color text-white rounded-md hover:bg-opacity-90">
      Edit
    </button>
  </div>
  <div>
    <textarea
      name=""
      id=""
      className="h-40 w-full rounded-md outline-none bg-background resize-none text-paragraph p-5"
      disabled={true}
    >
      Web Developer
    </textarea>
  </div>
</div>
}
