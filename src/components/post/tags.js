import React from "react";
import { Link } from "gatsby";

const Tags = ({ tags, tagSlugs }) => (
  <div className="flex flex-col py-4 space-y-2">
    {tagSlugs &&
      tagSlugs.map((slug, i) => (
        <div>
          <Link
            to={slug}
            className="uppercase text-pink-500 hover:text-blue-500"
          >
            {tags[i]}
          </Link>
        </div>
      ))}
  </div>
);

export default Tags;
