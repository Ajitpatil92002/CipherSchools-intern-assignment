import { useState } from "react";
import clsx from "clsx";
import {
  AiOutlineCloseCircle,
  AiOutlineHome,
  AiOutlineReconciliation,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import MenuItem from "./MenuItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/features/userSlice";
import { Link } from "react-router-dom";

const sidebarItems = [
  [
    {
      id: "0",
      title: "Dashboard",
      notifications: false,
      Icon: AiOutlineHome,
      href: "/",
    },
    {
      id: "1",
      title: "forms",
      notifications: false,
      Icon: AiOutlineReconciliation,
      href: "/",
    },
    {
      id: "2",
      title: "Charts",
      notifications: false,
      Icon: AiOutlineUser,
      href: "/",
    },
    {
      id: "3",
      title: "Tables",
      notifications: false,
      Icon: AiOutlineShoppingCart,
      href: "/",
    },
    {
      id: "4",
      title: "Buttons",
      notifications: 5,
      Icon: AiOutlineReconciliation,
      href: "/",
    },
  ],
];

type SidebarProps = {
  onSidebarHide: () => void;
  showSidebar: boolean;
};

function Sidebar({ onSidebarHide, showSidebar }: SidebarProps) {
  const [selected, setSelected] = useState("0");

  const dispatch = useAppDispatch();

  const { userDetails } = useAppSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div
      className={clsx(
        "fixed inset-y-0 left-0 bg-background w-full sm:w-20 xl:w-40 sm:flex flex-col z-10 border-r border-r-select-cont",
        showSidebar ? "flex" : "hidden"
      )}
    >
      <div className="flex-shrink-0 overflow-hidden p-2 border-l border-border-color">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-top">
          <div className="block sm:hidden xl:block ml-2 font-bold text-xl text-brand-color">
            cipherschools
          </div>
          <div className="flex-grow sm:hidden xl:block" />

          <AiOutlineCloseCircle
            className="block sm:hidden"
            onClick={onSidebarHide}
          />
        </div>
      </div>
      <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col">
        {sidebarItems[0].map((i) => (
          <MenuItem
            key={i.id}
            item={i}
            onClick={setSelected}
            selected={selected}
          />
        ))}
        <div className="flex-grow" />
      </div>

      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex flex-col items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-bottom">
          {/* <FiMoreVertical className="block sm:hidden xl:block w-3 h-3" /> */}
          {userDetails ? (
            <button
              type="button"
              onClick={handleLogout}
              className="px-6 py-1 mx-4  font-semibold rounded bg-brand-color text-white md:hidden"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to={"/login"} className="m-2 md:hidden">
                <button
                  type="button"
                  className="px-6 py-1 mx-4  font-semibold rounded bg-brand-color text-white"
                >
                  login
                </button>
              </Link>
              <Link to={"/signup"} className="m-1 md:hidden">
                <button
                  type="button"
                  className="px-6 py-1 mx-4  font-semibold rounded bg-brand-color text-white"
                >
                  signup
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
