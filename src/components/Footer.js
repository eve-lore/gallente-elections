import React from 'react'
import PropTypes from 'prop-types'

import Bg from '../images/footer.svg';

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <div className="wrapper">
            <Bg/>
            <div className="container">
                {props.children}
            </div>
        </div>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool,
    children: PropTypes.node,
}

export default Footer
