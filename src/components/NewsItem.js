import React from 'react'
import PropTypes from 'prop-types'
import YCDate from './YCDate'

class NewsItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = Object.assign({}, props.item)
    }

    render() {
        return (
            <li>
                <YCDate date={this.state.updated}/>
                <span className="item"><a href={this.state.url} target="_blank" rel="noopener noreferrer">{this.state.title}</a></span>
            </li>
        )
    }
}

NewsItem.propTypes = {
    item: PropTypes.object,
}

export default NewsItem
