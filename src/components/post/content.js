import React from "react";
import ProvideAndRenderMDX from "../mdx";

const Content = ({ body, title }) => (
  <div className="">
    <h1 className="pb-8 font-serif text-center">{title}</h1>
    <ProvideAndRenderMDX mdx={body} />
  </div>
);

export default Content;
