import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Img from "gatsby-image";
import Grid from '@material-ui/core/Grid';

export default ({ data }) => {
const page = data.contentfulCaseStudy;
return (
    <Layout>
        <div>
            <h1>{page.title}</h1>
            <h2>{page.description.description}</h2>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <div>
                        {page.gallery.map(({ fluid }, index) => (
                            <Img key={index} fluid={fluid} />
                        ))}
                    </div>
                </Grid>
            </Grid>          
        </div>
    </Layout>
);
};
export const query = graphql`
    query($slug: String!) {
        contentfulCaseStudy( slug: { eq: $slug } ) {
        title
        description{
            description
        }
        gallery {
            fluid(maxWidth: 900) {
                    ...GatsbyContentfulFluid_withWebp
            }
        }
        }
    }

`