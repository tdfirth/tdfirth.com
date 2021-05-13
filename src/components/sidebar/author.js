import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Author = ({ author, gatsbyImageData }) => (
  <div>
    <Link to="/">
      <GatsbyImage
        image={gatsbyImageData}
        className="mx-auto rounded-full h-24 w-24 xl:w-56 xl:h-56"
        alt={author.name}
      />
    </Link>

    <h1 className="font-serif py-4">
      <Link className="" to="/">
        {author.name}
      </Link>
    </h1>

    <p className="text-gray-700 my-2">{author.bio}</p>
  </div>
);

export default Author;
