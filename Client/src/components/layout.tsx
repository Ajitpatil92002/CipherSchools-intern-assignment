import Sidebar from "../components/Sidebar/Sidebar";
import { BiMenuAltRight, BiSearch } from "react-icons/bi";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout } from "../redux/features/userSlice";
import { Link } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showSidebar, onSetShowSidebar] = useState(false);

  const dispatch = useAppDispatch();

  const { userDetails } = useAppSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex">
      <Sidebar
        onSidebarHide={() => {
          onSetShowSidebar(false);
        }}
        showSidebar={showSidebar}
      />

      <div className="flex w-full bg-second-white">
        <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-40 flex-shrink-0">
          .
        </div>
        <div className="h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start">
          <div className="w-full sm:flex p-4 items-center justify-between bg-background border-b-2 border-l border-border-color">
            <div className="sm:flex-grow flex justify-between">
              <div className="block sm:hidden ml-2 font-bold text-2xl text-brand-color text-center">
                cipherschools
              </div>
              <nav className="md:ml-auto md:mr-auto  flex-wrap items-center text-base justify-center hidden xl:flex">
                <a className="mr-5 hover:text-slate-50 hover:cursor-pointer text-text-color">
                  First Link
                </a>
                <a className="mr-5 hover:text-slate-50 hover:cursor-pointer text-text-color">
                  Second Link
                </a>
                <a className="mr-5 hover:text-slate-50 hover:cursor-pointer text-text-color">
                  Third Link
                </a>
                <a className="mr-5 hover:text-slate-50 hover:cursor-pointer text-text-color">
                  Fourth Link
                </a>
              </nav>
              <span onClick={() => onSetShowSidebar(!showSidebar)}>
                <BiMenuAltRight className="block sm:hidden" size={50} />
              </span>
            </div>
            {userDetails ? (
              <button
                type="button"
                onClick={handleLogout}
                className="px-6 py-1 mx-4 hidden sm:block font-semibold rounded bg-brand-color text-white"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to={"/login"}>
                  <button
                    type="button"
                    className="px-6 py-1 mx-4 hidden sm:block font-semibold rounded bg-brand-color text-white"
                  >
                    login
                  </button>
                </Link>
                <Link to={"signup"}>
                  <button
                    type="button"
                    className="px-6 py-1 mx-4 hidden sm:block font-semibold rounded bg-brand-color text-white"
                  >
                    signup
                  </button>
                </Link>
              </>
            )}
            <div className="w-full sm:w-56 sm:mt-0 relative">
              <BiSearch className="w-5 h-5 search-icon left-3 absolute" />
              <input
                type="text"
                className="pl-12 py-2 pr-2 block w-full rounded-lg border-border-color bg-second-white"
                placeholder="search"
              />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
