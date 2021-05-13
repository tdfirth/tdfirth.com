import React from "react";
import { Link } from "gatsby";

const Pill = (props) => (
  <Link
    to={props.to}
    className={`${props.className} uppercase border rounded-full border-gray-100 px-4 py-2 hover:text-blue-500 hover:border-blue-200 cursor-pointer`}
  >
    {props.children}
  </Link>
);

export default Pill;
