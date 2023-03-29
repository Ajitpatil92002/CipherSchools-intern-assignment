
export default function ProfileDetails() {
  return  <div className="pf-user-box  bg-profile-cover h-28 w-full">
  <div className="pf-user-back">
    <div className="profile-conatiner h-full w-full p-4 flex justify-start items-center gap-4 bg-gradient-to-r from-background via-transparent to-background">
      <div className="profile-img">
        <img
          src="./userProfile.png"
          alt=""
          className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start"
        />
      </div>
      <div className="profile-content flex flex-1 justify-between items-center text-text-color2">
        <div className="user-details">
          <h2 className="text-xl">Hello,</h2>
          <h1 className="text-xl font-semibold">Ajit Patil</h1>
          <h2 className="text-xl">patilajit020@gmail.com</h2>
        </div>
        <div className="user-followers hidden xl:block">
          <h2 className="text-xl">0 followers</h2>
        </div>
      </div>
    </div>
  </div>
</div>
}
