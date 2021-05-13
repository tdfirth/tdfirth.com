import React from "react";
import Author from "./author";
import Contacts from "./contacts";
import Copyright from "./copyright";
import Menu from "./menu";
import { useSiteMetadata } from "../../hooks";
import { useProfilePicture } from "../../hooks";

const Sidebar = ({ isIndex }) => {
  const { author, copyright, menu } = useSiteMetadata();
  const gatsbyImageData = useProfilePicture();

  return (
    <div className="w-full border-b md:border-b-0 md:border-r md:max-w-xs border-gray-100">
      <div className="relative p-8">
        <Author
          author={author}
          isIndex={isIndex}
          gatsbyImageData={gatsbyImageData}
        />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
