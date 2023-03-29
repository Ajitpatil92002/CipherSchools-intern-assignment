
export default function Password() {
  return <div className="password-conatiner m-4 flex justify-center  flex-col">
  <div className="web-links-top flex justify-between items-center p-4">
    <h3 className="text-text-color2 text-xl font-bold">
      PASSWORD & SECURITY
    </h3>
    <button className="px-8 py-1  bg-brand-color text-white rounded-md hover:bg-opacity-90">
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
            name="LinkedIn"
            placeholder="password"
            className=" w-full rounded-md outline-none bg-background"
          />
        </div>
      </div>
    </div>
  </div>
</div>
}
