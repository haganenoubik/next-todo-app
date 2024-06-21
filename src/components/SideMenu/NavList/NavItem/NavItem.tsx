'use client' // Hooksを使用するため

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

interface NavItemProps {
  label: string;
  link: string;
  icon: ReactNode;
}

const NavItem: FC<NavItemProps> = (props) => {
  const { label, link, icon } = props;
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={`flex p-4 items-center w-full hover:bg-gray-700 font-medium
      ${pathname == link ? 'bg-gray-600 border-r-4 border-r-teal-500' : ''}
      `}>
      <div className="pr-2">{icon}</div>
      <div>{label}</div>
    </Link>
  );
};

export default NavItem;
