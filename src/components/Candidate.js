import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'
import NewsList from './NewsList'


const Candidate = ({candidate, active, news}) => (
    <div className={`candidate ${active ? 'active': '' }`}>
        <div className="wrapper">
            <div className="intro">
                <div className="overview">
                    <h2 className="vertical">Information</h2>
                </div>
                <div className="data">
                    <div className="portrait">
                        <img src={`https://images.evetech.net/characters/${candidate.characterId ? candidate.characterId : 1}/portrait`} alt={candidate.name}></img>
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
                        <Markdown source={candidate.description ? candidate.description.description : ``} />
                    </div>
                </div>
                <div className="recent">
                    <h3>Recent News</h3>
                    <div>
                        <NewsList news={news} candidate={candidate} />
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
