export default function Intrsest() {
  return (
    <div className="Intrest-conatiner m-4 flex justify-center  flex-col">
      <div className="web-links-top flex justify-between items-center p-4">
        <h3 className="text-text-color2 text-xl font-bold">INTERESTS</h3>
        <button className="px-8 py-1  bg-brand-color text-white rounded-md hover:bg-opacity-90">
          Edit
        </button>
      </div>
      <div>
        <div className="flex flex-row items-center justify-start flex-wrap">
          <div className="px-6 py-2 text-brand-color bg-brand-color-shade rounded-md ml-2 mt-2">
            Web Development
          </div>
          <div className="px-6 py-2 text-brand-color bg-brand-color-shade rounded-md ml-2 mt-2">
            Web Development
          </div>
        </div>
      </div>
    </div>
  );
}
