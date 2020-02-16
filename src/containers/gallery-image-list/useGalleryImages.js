import { useStaticQuery, graphql } from 'gatsby'

const useGalleryImages = () => {
    const data = useStaticQuery(
        graphql`
        query {
            allContentfulGalleryImage{
                edges{
                    node{
                        title
                        stillImage{
                            fluid(maxWidth: 960) {
                  ...GatsbyContentfulFluid_withWebp
                }
                        }
                        animatedImage{
                            fluid(maxWidth: 960) {
                  ...GatsbyContentfulFluid_withWebp
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