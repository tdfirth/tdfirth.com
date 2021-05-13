import React from "react";
import { Link } from "gatsby";

const Tags = ({ tags, tagSlugs }) => (
  <div className="">
    <ul className="">
      {tagSlugs &&
        tagSlugs.map((slug, i) => (
          <li className="" key={tags[i]}>
            <Link to={slug} className="">
              {tags[i]}
            </Link>
          </li>
        ))}
    </ul>
  </div>
);

export default Tags;
