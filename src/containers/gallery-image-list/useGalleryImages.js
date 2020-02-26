import {  graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react'

const renderImage = (file) => {
  return (
    <Img fluid={file.node.childImageSharp.fluid}/>
  )
}

const useGalleryImages = (props) => {

  return <StaticQuery
    query={graphql`
      query {
        contentfulGalleryImage {
               id
             }
             allContentfulGalleryImage(filter: {stillImage: {contentful_id: { eq: "images"} }}) {
               edges {
                 node {
                   stillImage {
               
                       fluid(maxWidth: 960) {
            ...GatsbyContentfulFluid_withWebp
                     }
                   }
                 }
               }
              }
            }
           `}
          render={(data) => {
            const image = data.allContentfulImages.find(
              image => image.node.relativePath === props.jpg
            )
            return(renderImage(image))
          }}
          />
        }







//     const data = useStaticQuery(
//         graphql`
//         query MyQuery($id: ID!) {
//   contentfulGalleryImage {
//     id
//   }
//   allContentfulGalleryImage(filter: {stillImage: {contentful_id: $id }}) {
//     edges {
//       node {
//         stillImage {
//           fluid {
//             srcWebp
//           }
//         }
//       }
//     }
//   }
// }

//     `
//     );
//     return data;
    
// };

export default useGalleryImages;