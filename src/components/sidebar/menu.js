import React from "react";
import { Link } from "gatsby";

const Menu = ({ menu }) => (
  <nav className="">
    <ul className="">
      {menu.map((item) => (
        <li className="py-2 text-md" key={item.path}>
          <Link to={item.path} className="" activeClassName="">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
