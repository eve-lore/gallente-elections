import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => (
    <button onClick={props.onClick} className={props.active ? 'active' : ''}>
        <span>
        {props.children}
        </span>
    </button>
)

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    active: PropTypes.bool,
}

export default Button
