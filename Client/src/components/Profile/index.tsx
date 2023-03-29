import AboutMe from "./AboutMe";
import Intrsest from "./Intrsest";
import Password from "./Password";
import ProfessionalInfo from "./ProfessionalInfo";
import ProfileDetails from "./ProfileDetails";
import WebLinks from "./WebLinks";

export default function Profile() {
  return (
    <>
      <div className="pf-container bg-second-white borde border-border-color">
        <ProfileDetails />

        <AboutMe />

        <div className="bg-border-color rounded-md h-[1px] mx-4 my-2 w-full" />

        <WebLinks />

        <div className="bg-border-color rounded-md h-[1px] mx-4 mt-10 mb-6 w-full" />
        <ProfessionalInfo />
        <div className="bg-border-color rounded-md h-[1px] mx-4 mt-10 mb-6 w-full" />

        <Password />

        <div className="bg-border-color rounded-md h-[1px] mx-4 mt-10 mb-6 w-full" />

        <Intrsest />
      </div>
    </>
  );
}
