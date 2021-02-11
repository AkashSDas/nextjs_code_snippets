import Link from "next/link";
import React from "react";

interface NavItemProps {
  href: string;
  pathName: string;
}

export const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
  return (
    <li>
      <Link href={props.href}>
        <a>{props.pathName}</a>
      </Link>
    </li>
  );
};

const NavBar: React.FC = () => {
  return (
    <ul>
      <NavItem href="/" pathName="Home" />
      <NavItem href="/about" pathName="About" />
      <NavItem href="/contact-us" pathName="Contact Us" />
      <NavItem
        href="/static-generation-without-data"
        pathName="Static generation without data"
      />
      <NavItem
        href="/static-generation-with-data"
        pathName="Static generation with data"
      />
    </ul>
  );
};

export default NavBar;
