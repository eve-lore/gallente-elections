import React from 'react'
import PropTypes from 'prop-types'

import Bg from '../images/header.svg';

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="wrapper">
            <Bg/>
            <div className="container">
                {props.children}
            </div>
        </div> 
    </header>
)

Header.propTypes = {
    timeout: PropTypes.bool,
    children: PropTypes.node,
}

export default Header
