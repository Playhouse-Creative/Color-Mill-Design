import React from 'react';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/styles';
import {Layout, SEO} from '../components';
import Img from "gatsby-image";
import {Grid, Container, GridList, GridListTile} from '@material-ui/core';
import styles from './style';
import StackGrid from "react-stack-grid"


type Props = {
  classes: Object,
};

const CaseStudy = ({ data }, { classes }: Props) => {
const page = data.contentfulCaseStudy;
return (
    <Layout>
    <SEO title={page.title}/>
    <Container maxWidth='lg'>
        
        <Grid container spacing={2} direction="row"
            justify="space-around"
            alignItems="flex-Start">
            
            <Grid item xs={12} md={6}>
                        
            </Grid>
            
            </Grid>  
            <StackGrid columnWidth={'33%'} gutterWidth={20} gutterHeight={20}>
                <div>
            <h1>{page.title}</h1>
            <p>{page.description.description}</p>
            </div>
                        {page.gallery.map(({ fluid }) => (
                        <div>
                            <Img fluid={fluid} />
                            </div>
                        ))}
            </StackGrid>
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