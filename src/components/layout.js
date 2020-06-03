/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import Deth from '../images/Deth-Fort-Bragg-White.svg'

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div>
          <Header siteTitle={data.site.siteMetadata.title} />
            <main style={{
              margin: `0 auto`,
            }}>{children}</main>
            <footer style={{ padding: 30, backgroundColor:'#63768D', color:'#E9F1F7', display:'flex', justifyContent:'space-around', alignItems:'center' }}>
            <div>
              © Color Mill Design {new Date().getFullYear()}, Built with
              {` `}
              <a style={{color:'#E9F1F7'}} href="https://www.gatsbyjs.org">Gatsby</a>
              </div>
              <img src={Deth} type='image/svg+xml' width='128' height='144'/>
            </footer>
            </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
