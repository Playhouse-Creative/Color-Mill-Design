import {  graphql, useStaticQuery } from 'gatsby';


const useGalleryImages = () => {
    const data = useStaticQuery(
        graphql`
        query {
          allContentfulGalleryImage(filter: {contentful_id: {eq: ""}}) {
            edges {
              node {
                stillImage {
                  fluid(maxWidth: 900) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                  }
                  file {
                    url
                    fileName
                    contentType
                  }
                }
              }
            }
          }
        }
        `
);
    return data;
    
};

export default useGalleryImages;