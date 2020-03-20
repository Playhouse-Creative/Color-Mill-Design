import React from 'react';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/styles';
import {Layout, SEO} from '../components';
import Img from "gatsby-image";
import { Container } from '@material-ui/core';
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
            <StackGrid columnWidth={300} gutterWidth={20} gutterHeight={20} easing={'easeInOut'}>
                <div>
                    <h1>{page.title}</h1>
                    <p dangerouslySetInnerHTML={{ __html:page.description.childMarkdownRemark.html}}></p>
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
            childMarkdownRemark{
                html
            }
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