import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = (props) => {
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
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
          ]}>
          <html lang="en" />
        </Helmet>
        <div className={`body ${props.loading ? 'is-loading': 'is-ready'}`} id="body-wrapper">
          <div id="body" className="body">
          {props.children}
          </div>
        </div>
      </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  timeout: PropTypes.bool,
}

export default Layout
