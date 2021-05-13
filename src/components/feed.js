import React from "react";
import { Link } from "gatsby";

const Feed = ({ edges }) => (
  <div className="py-8">
    {edges.map((edge) => (
      <div className="py-6" key={edge.node.fields.slug}>
        <div className="flex">
          <time
            className="font-bold uppercase text-sm"
            dateTime={new Date(edge.node.frontmatter.date).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
          >
            {new Date(edge.node.frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </time>
          <span className="flex-grow" />
          <span className="uppercase text-pink-500 hover:text-blue-500">
            <Link to={edge.node.fields.categorySlug}>
              {edge.node.frontmatter.category}
            </Link>
          </span>
        </div>
        <div>
          <h2 className="py-3 font-serif hover:underline">
            <Link className="" to={edge.node.fields.slug}>
              {edge.node.frontmatter.title}
            </Link>
          </h2>
        </div>
        <p className="text-gray-700">{edge.node.frontmatter.description}</p>
        <div className="mt-4">
          <Link
            className="text-blue-600 hover:underline"
            to={edge.node.fields.slug}
          >
            Read
          </Link>
        </div>
      </div>
    ))}
  </div>
);

export default Feed;
