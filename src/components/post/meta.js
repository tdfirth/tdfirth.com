import React from "react";

const Meta = ({ date }) => (
  <div className="">
    <p className="italic">
      Published{" "}
      {new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    </p>
  </div>
);

export default Meta;
