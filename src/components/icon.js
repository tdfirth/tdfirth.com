import React from "react";

const Icon = ({ name, icon }) => (
  <svg
    className="block w-4 h-4 stroke-current fill-current stroke-0"
    viewBox={icon.viewBox}
  >
    <title>{name}</title>
    <path d={icon.path} />
  </svg>
);

export default Icon;
