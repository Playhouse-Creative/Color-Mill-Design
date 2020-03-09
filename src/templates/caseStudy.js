import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Img from "gatsby-image";
import Grid from '@material-ui/core/Grid';
import styles from './style';

type Props = {
  classes: Object,
};

export default ({ data }) => {
const page = data.contentfulCaseStudy;
return (
    <Layout>
    <div className={classes.container}>
        <h1>{page.title}</h1>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
            <p>{page.description.description}</p>
                        {page.gallery.map(({ fluid }, index) => (
                            <Img key={index} fluid={fluid} />
                        ))}
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