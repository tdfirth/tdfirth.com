import React from "react";

const Content = ({ body, title }) => (
  <div className="">
    <h1 className="">{title}</h1>
    <div className="" dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
