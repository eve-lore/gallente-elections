import React, { forwardRef } from "react";
import PropTypes from 'prop-types'

import TransitionLink from "gatsby-plugin-transition-link"

const Link = forwardRef(({
    children,
    trigger,
    duration,
    state,
    ...rest
  }, ref) => {
    return (
        <TransitionLink
        exit={{
            trigger: ({exit, node}) => trigger(exit, node),
            state: state,
            length: duration,
        }}
        entry={{
            delay: duration,
            length: duration,
        }}
        activeClassName="active"
        {...rest}
        ><span>{children}</span></TransitionLink>
    )
});

Link.propTypes = {
    to: PropTypes.string.isRequired,
    trigger: PropTypes.func.isRequired,
    duration: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
    state: PropTypes.object.isRequired,
}

export default Link
