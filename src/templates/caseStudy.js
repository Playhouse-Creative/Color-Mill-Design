import React from 'react';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/styles';
import {Layout, SEO} from '../components';
import Img from "gatsby-image";
import {Grid, Container} from '@material-ui/core';
import styles from './style';


type Props = {
  classes: Object,
};

const CaseStudy = ({ data }, { classes }: Props) => {
const page = data.contentfulCaseStudy;
return (
    <Layout>
    <SEO title={page.title}/>
    <Container maxWidth='lg'>
        <h1>{page.title}</h1>
        <Grid container spacing={2} direction="row"
  justify="center"
  alignItems="flex-start">
            
            <Grid item xs={12} md={3}>
            <p>{page.description.description}</p>
                        {page.gallery.map(({ fluid }) => (
                            <Img fluid={fluid} />
                        ))}
                        </Grid>
            </Grid>   
            </Container>     
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
export default withStyles(styles)(CaseStudy)