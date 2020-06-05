import React, { useMemo }from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const ArtImage = ({ src, ...props }) => {
    const data = useStaticQuery(graphql`
        query {
        allFile( filter: { internal: { mediaType: { regex: "images/" } } } ) {
            edges {
            node {
                relativePath
                childImageSharp {
                fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
                }
            }
            }
        }
        }
    `)

    const match = useMemo(() => (
        data.allFile.edges.find(({ node }) => src === node.relativePath)
    ), [ data, src ])

    return (
        <Img
        fluid={match.node.childImageSharp.fluid}
        {...props}
        />
    )
}


export default ArtImage


