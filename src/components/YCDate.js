import React from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

class YCDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            raw: moment(props.date),
            yc: moment(props.date).subtract(1907, 'years'),
        }
    }

    render() {
        return (
            <span className="date">{this.state.yc.format("[YC]Y.MM.DD")}</span>
        )
    }
}

YCDate.propTypes = {
    date: PropTypes.string.isRequired,
}

export default YCDate
