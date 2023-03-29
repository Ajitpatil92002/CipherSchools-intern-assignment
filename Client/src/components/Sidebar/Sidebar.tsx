import { useState } from "react";
import clsx from "clsx";
import {
  AiOutlineCloseCircle,
  AiOutlineHome,
  AiOutlineReconciliation,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { FiAlertTriangle, FiSettings } from "react-icons/fi";
import MenuItem from "./MenuItem";

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
  [
    {
      id: "5",
      title: "Reports",
      notifications: false,
      Icon: FiAlertTriangle,
      href: "/",
    },
    {
      id: "6",
      title: "Settings",
      notifications: false,
      Icon: FiSettings,
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
        <div className="mt-8 mb-0 font-bold px-3 block sm:hidden xl:block ">
          SHORTCUTS
        </div>
        {sidebarItems[1].map((i) => (
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
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-bottom">
          <img
            src="https://assets.codepen.io/3685267/mock_faces_8.jpg"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="block sm:hidden xl:block ml-2 font-bold ">Admin</div>
          <div className="flex-grow block sm:hidden xl:block" />
          {/* <FiMoreVertical className="block sm:hidden xl:block w-3 h-3" /> */}
          <button
            type="button"
            className="px-2 py-2 mx-2 sm:hidden font-semibold rounded bg-gray-100 text-gray-800"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
