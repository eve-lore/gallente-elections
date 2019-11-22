import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'
import NewsList from './NewsList'


import Twitter from '../images/Twitter_Logo_Blue.svg';

const Candidate = ({location, candidate, active, news}) => (
    <div className={`candidate ${active ? 'active': '' }`}>
        <div className="wrapper">
            <div className="intro">
                <div className="overview">
                    <h2 className="vertical">Information</h2>
                </div>
                <div className="data">
                    <div className="portrait">
                        <img src={`https://images.evetech.net/characters/${candidate.characterId ? candidate.characterId : 1}/portrait`} alt={candidate.name}></img>
                        <div className="tweet">
                            <a className="no-animate" href={`https://twitter.com/intent/tweet?text=I Support ${candidate.name} in the YC122 Elections! %0A%0A %23TweetFleet %23EVEOnline %23GallenteElections %23TheLoreYouKnow%0A&url=${location.href.split(/[?#]/)[0]}`}>
                                <Twitter/>
                            </a>
                        </div>
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
    location: PropTypes.object,
    candiate: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired,
    news: PropTypes.array.isRequired,
}

export default Candidate
