import React from "react";
import Helmet from "react-helmet";
import { useSiteMetadata } from "../hooks";

const Layout = ({ children, title, description, socialImage = "" }) => {
  const { author, url } = useSiteMetadata();
  const metaImage = socialImage || author.photo;
  const metaImageUrl = url + metaImage;

  return (
    <div className="min-h-screen min-w-screen flex items-baseline">
      <div className="grid grid-flow-row md:grid-flow-col md:max-w-6xl mx-auto">
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:site_name" content={title} />
          <meta property="og:image" content={metaImageUrl} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={metaImageUrl} />
        </Helmet>
        {children}
      </div>
    </div>
  );
};

export default Layout;
