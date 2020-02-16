import React from 'react';

import { Layout, SEO } from 'components';
import { Welcome } from 'containers';
import { GalleryImageList } from 'containers'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Welcome />
    <GalleryImageList/>
  </Layout>
);

export default IndexPage;
