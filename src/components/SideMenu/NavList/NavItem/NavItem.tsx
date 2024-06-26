'use client'

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
      className={`flex p-4 items-center w-full hover:bg-sky-500 font-medium
      ${pathname == link ? 'bg-sky-400 border-r-4 border-r-amber-400' : ''}
      `}>
      <div className="pr-2">{icon}</div>
      <div>{label}</div>
    </Link>
  );
};

export default NavItem;
