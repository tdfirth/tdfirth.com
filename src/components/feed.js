import React from "react";
import { Link } from "gatsby";

const Feed = ({ edges }) => (
  <div className="">
    {edges.map((edge) => (
      <div className="" key={edge.node.fields.slug}>
        <div className="">
          <time
            className=""
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
          <span className="" />
          <span className="">
            <Link to={edge.node.fields.categorySlug} className="">
              {edge.node.frontmatter.category}
            </Link>
          </span>
        </div>
        <h2 className="">
          <Link className="" to={edge.node.fields.slug}>
            {edge.node.frontmatter.title}
          </Link>
        </h2>
        <p className="">{edge.node.frontmatter.description}</p>
        <Link className="" to={edge.node.fields.slug}>
          Read
        </Link>
      </div>
    ))}
  </div>
);

export default Feed;
