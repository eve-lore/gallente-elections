import React from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

const YCDate = (props) => {
    const yc = moment(props.date).subtract(1898, 'years')

    return (
        <span className="date">{yc.format("[YC]Y.MM.DD")}</span>
    )
}

YCDate.propTypes = {
    date: PropTypes.string.isRequired,
}

export default YCDate
