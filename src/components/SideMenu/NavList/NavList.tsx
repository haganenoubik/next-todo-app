import { ReactNode } from "react";
import { FaRegCheckCircle, FaTasks } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import NavItem from "./NavItem/NavItem";

interface NavItemType {
  id: number;
  label: string;
  link: string;
  icon: ReactNode;
}

const NavList = () => {
  const navList: NavItemType[] = [
    {
      id: 1,
      label: "すべてのToDo",
      link: "/",
      icon: <FaTasks className="size-5" />,
    },
    {
      id: 2,
      label: "完了したToDo",
      link: "/completed",
      icon: <FaRegCheckCircle className="size-5" />,
    },
    {
      id: 3,
      label: "期限切れのToDo",
      link: "/expired",
      icon: <FaRegClock className="size-5" />,
    },
  ];
  return (
    <div className="mt-24">
      {navList.map((item) => (
        <NavItem key={item.id} label={item.label} link={item.link} icon={item.icon} />
      ))}
    </div>
  );
};

export default NavList;
