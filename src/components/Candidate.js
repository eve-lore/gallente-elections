import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'


const Candidate = ({candidate, active, news}) => (
    <div className={`candidate ${active ? 'active': '' }`}>
        <div className="wrapper">
            <div className="intro">
                <div className="overview">
                    <h2 className="vertical">Information</h2>
                </div>
                <div className="data">
                    <div className="portrait">
                        <img src={`https://images.evetech.net/characters/${candidate.character_id ? candidate.character_id : 1}/portrait`} alt={candidate.name}></img>
                    </div>
                    <div className="name">
                        <h2>{candidate.name}</h2>
                    </div>
                </div>
            </div>
            <div className="details">
                <div className="dossier">
                    <h3>Dossier</h3>
                    <div>
                        <Markdown source={candidate.description} />
                    </div>
                </div>
                <div className="recent">
                    <h3>Recent News</h3>
                    <div>
                        <ul>
                            {news.filter(({candidates}) => candidates.some(name => (name === candidate.name) || (name === candidate.short_name))).map((item) => (
                            <li><span className="date">{item.date}</span><span className="item"><a href={item.url}>{item.title}</a></span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

Candidate.propTypes = {
    candiate: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired,
    news: PropTypes.array.isRequired,
}

export default Candidate
