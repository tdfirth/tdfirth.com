import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Content = ({ body, title }) => (
  <div className="">
    <h1 className="font-serif text-center">{title}</h1>
    <MDXRenderer>{body}</MDXRenderer>
  </div>
);

export default Content;
