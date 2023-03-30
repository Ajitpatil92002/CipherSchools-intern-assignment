import { useContext, useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import AboutMe from "./AboutMe";
import Intrsest from "./Intrsest";
import Password from "./Password";
import ProfessionalInfo from "./ProfessionalInfo";
import ProfileDetails from "./ProfileDetails";
import WebLinks from "./WebLinks";
import USER from "../../api";
import { UserContext } from "../../context/userContext";

export default function Profile() {
  const { token, userDetails } = useAppSelector((state) => state.user);

  const userContext = useContext(UserContext);

  useEffect(() => {
    async function fetchUserData() {
      if (userDetails) {
        try {
          const resp = await USER.get(token, userDetails._id);
          const data = resp.data;
          userContext?.dispatch({ type: "SET_STATE", payload: { ...data } });
        } catch (err) {
          alert("error");
        }
      }
    }
    fetchUserData();
  }, []);
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
