import React from "react";
import { Link } from "gatsby";

const Menu = ({ menu }) => (
  <nav className="py-4">
    <ul className="">
      {menu.map((item) => (
        <li
          className="capitalize text-lg py-4 text-md hover:underline hover:text-blue-500"
          key={item.path}
        >
          <Link
            to={item.path}
            className=""
            activeClassName="underline text-blue-600"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
