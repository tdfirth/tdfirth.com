import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

const Header = ({ tag: T, children }) => (
  <T className="flex flex-row mt-6 mb-2 font-serif">{children}</T>
);

const mdxComponents = {
  h1: ({ children }) => <Header tag="h1">{children}</Header>,
  h2: ({ children }) => <Header tag="h2">{children}</Header>,
  h3: ({ children }) => <Header tag="h3">{children}</Header>,
  h4: ({ children }) => <Header tag="h4">{children}</Header>,
  h5: ({ children }) => <Header tag="h5">{children}</Header>,
  h6: ({ children }) => <Header tag="h6">{children}</Header>,
  ul: ({ children }) => (
    <ul className="p-2 list-disc list-inside">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="p-2 list-decimal list-inside">{children}</ol>
  ),
  p: ({ children }) => <p className="py-2">{children}</p>,
  blockquote: ({ children }) => (
    <div className="relative my-4 bg-gray-50 border-l-8 border-teal-500">
      <div className="absolute left-4 top-4 text-6xl text-teal-500">
        &#8220;
      </div>
      <blockquote className="py-6 px-16 italic text-lg">{children}</blockquote>
    </div>
  ),
};

const ProvideAndRenderMDX = ({ mdx }) => (
  <MDXProvider components={mdxComponents}>
    <MDXRenderer>{mdx}</MDXRenderer>
  </MDXProvider>
);

export default ProvideAndRenderMDX;
