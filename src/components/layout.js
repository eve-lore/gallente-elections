import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useSite } from "../hooks/site"

import '../assets/scss/main.scss'
import icon from "../images/gallente.png"

const Layout = (props) => {
  const { siteMetadata } = useSite()
  const { location } = props
  return (
    <>
      <Helmet
        titleTemplate={`${siteMetadata.title} | %s`}
        defaultTitle={siteMetadata.title}
        >
        <html lang="en" />
        <meta property="og:url" content={siteMetadata.siteUr} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:image" content={`${siteMetadata.siteUrl}${icon}`} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content={siteMetadata.twitter} />
        <link rel="canonical" href={`${siteMetadata.siteUrl}${location.pathname}`} />
      </Helmet>
      <div className={`body base-${props.base ? 'skip' : 'do'} ui-${props.ui ? 'show' : 'hide'} content-${props.content ? 'show' : 'hide'} ${props.fading ? 'fading' : ''}`} id="body-wrapper">
        <div id="body" className="body">
        {props.children}
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  timeout: PropTypes.bool,
  base: PropTypes.bool,
  ui: PropTypes.bool,
  content: PropTypes.bool,
  fading: PropTypes.bool,
}

export default Layout
