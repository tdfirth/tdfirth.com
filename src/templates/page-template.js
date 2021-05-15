import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import Page from "../components/page";
import { useSiteMetadata } from "../hooks";
import ProvideAndRenderMDX from "../components/mdx";

const PageTemplate = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { body, frontmatter } = data.mdx;
  const {
    title: pageTitle,
    description: pageDescription = "",
    socialImage,
  } = frontmatter;
  const metaDescription = pageDescription || siteSubtitle;
  const socialImageUrl = socialImage;

  return (
    <Layout
      title={`${pageTitle} - ${siteTitle}`}
      description={metaDescription}
      socialImage={socialImageUrl}
    >
      <Sidebar />
      <Page title={pageTitle}>
        <ProvideAndRenderMDX mdx={body} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        date
        description
        socialImage
      }
    }
  }
`;

export default PageTemplate;
