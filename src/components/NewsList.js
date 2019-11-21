import React from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

class NewsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            candidate: props.candidate,
            news: props.news,
        }
    }

    render() {
        return (
            <ul>
            {this.state.news.filter(({candidates}) => candidates.some(({name}) => (name === this.state.candidate.name) )).map((item) => (
                <NewsItem key={item.id} item={item}/>
            ))}
            </ul>
        )
    }
}

NewsList.propTypes = {
    candidate: PropTypes.object.isRequired,
    news: PropTypes.array,
}

export default NewsList
