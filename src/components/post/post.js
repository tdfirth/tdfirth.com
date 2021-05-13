import React from "react";
import { Link } from "gatsby";
import Author from "./author";
import Content from "./content";
import Meta from "./meta";
import Tags from "./tags";

const Post = ({ post }) => {
  const { html } = post;
  const { tagSlugs } = post.fields;
  const { tags, title, date } = post.frontmatter;

  return (
    <div className="">
      <Link className="" to="/">
        All Articles
      </Link>

      <div className="">
        <Content body={html} title={title} />
      </div>

      <div className="">
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>
    </div>
  );
};

export default Post;
