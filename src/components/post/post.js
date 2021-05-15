import React from "react";
import Author from "./author";
import Content from "./content";
import Meta from "./meta";
import Tags from "./tags";
import Pill from "./pill";

const Post = ({ post }) => {
  const { body } = post;
  const { tagSlugs } = post.fields;
  const { tags, title, date } = post.frontmatter;

  return (
    <div className="py-8 max-w-xl">
      <Pill className={`lg:absolute lg:left-12 lg:top-8`} to="/">
        All Articles
      </Pill>

      <div className="py-8">
        <Content body={body} title={title} />
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
