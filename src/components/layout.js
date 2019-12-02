import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useSite } from "../hooks/site"

import '../assets/scss/main.scss'

const Layout = (props) => {
  const { siteMetadata } = useSite()
  return (
    <>
      <Helmet
        title={siteMetadata.title}
        meta={[
          { name: 'description', content: siteMetadata.description },
        ]}>
        <html lang="en" />
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
