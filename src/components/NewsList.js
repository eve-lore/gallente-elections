import React from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

import { useNews } from "../hooks/news"


const NewsList = (props) => {

    const news = useNews()
    const { candidate } = props

    return (
        <ul>
        {news.filter(({candidates}) => candidates.some(({name}) => (name === candidate.name) )).map((item) => (
            <NewsItem key={item.id} item={item}/>
        ))}
        </ul>
    )
}

NewsList.propTypes = {
    candidate: PropTypes.object.isRequired,
}

export default NewsList
