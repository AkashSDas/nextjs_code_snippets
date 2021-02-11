import Link from "next/link";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
