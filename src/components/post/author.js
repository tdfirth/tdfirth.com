import React from "react";
import { getContactHref } from "../../utils";
import { useSiteMetadata } from "../../hooks";

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className="border-t border-gray-100 mt-6 py-8">
      <p className="flex flex-col">
        {author.bio}
        <a
          className="underline text-blue-600"
          href={getContactHref("twitter", author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name}</strong> on Twitter
        </a>
      </p>
    </div>
  );
};

export default Author;
