import clsx from "clsx";
import { IconType } from "react-icons";

type ItemTypes = {
  id: string;
  title: string;
  notifications: boolean | number;
  Icon: IconType;
  href: string;
};

type MenuItemProps = {
  item: ItemTypes;
  onClick: (id: string) => void;
  selected: string;
};

const MenuItem = ({
  item: { id, title, notifications, Icon, href },
  onClick,
  selected,
}: MenuItemProps) => {
  return (
    <>
      <a href={href}>
        <div
          className={clsx(
            "w-full mt-6 flex items-center px-3 sm:px-0 xl:px-3 justify-start sm:justify-center xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer",
            selected === id ? "sidebar-item-selected" : "sidebar-item"
          )}
          onClick={() => onClick(id)}
        >
          <Icon />
          <div className="block sm:hidden xl:block ml-2 text-gray-200">
            {title}
          </div>
          <div className="block sm:hidden xl:block flex-grow" />
         
        </div>
      </a>
    </>
  );
};

export default MenuItem;
