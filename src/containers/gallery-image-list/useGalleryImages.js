import { useStaticQuery, graphql } from 'gatsby';

const useGalleryImages = () => {
    const data = useStaticQuery(
        graphql`
        query MyQuery($id: ID!) {
  contentfulGalleryImage {
    id
  }
  allContentfulGalleryImage(filter: {stillImage: {contentful_id: $id }}) {
    edges {
      node {
        stillImage {
          fluid {
            srcWebp
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