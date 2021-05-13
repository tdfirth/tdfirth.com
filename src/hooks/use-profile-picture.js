import { useStaticQuery, graphql } from "gatsby";

const useProfilePicture = () => {
  const { imageSharp } = useStaticQuery(
    graphql`
      query ProfilePictureQuery {
        imageSharp(fixed: { originalName: { eq: "photo.jpg" } }) {
          gatsbyImageData(layout: CONSTRAINED, height: 400, width: 400)
        }
      }
    `
  );
  return imageSharp.gatsbyImageData;
};

export default useProfilePicture;
