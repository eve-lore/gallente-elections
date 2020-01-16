import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'
import NewsList from './NewsList'
import {useSite} from "../hooks/site"

import Twitter from '../images/Twitter_Logo_Blue.svg'; 

const Candidate = (props) => {
    const { pathPrefix, siteMetadata } = useSite()
    const { location, candidate, active } = props

    const charId = candidate.characterId ? candidate.characterId : 1

    return (
        <div className={`candidate ${active ? 'active': '' }`}>
            <div className="wrapper">
                <div className="intro">
                    <div className="overview">
                        <h2 className="vertical">Information</h2>
                    </div>
                    <div className="data">
                        <div className="portrait">
                            <img src={`https://images.evetech.net/characters/${charId}/portrait`} alt={candidate.name}></img>
                            <div className="tweet">
                                <a className="no-animate" target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?text=I Support ${candidate.name} in the YC122 Elections! %0A%0A %23TweetFleet %23EVEOnline %23GallenteElections %23TheLoreYouKnow%0A&url=${siteMetadata.siteUrl}${pathPrefix}${location.pathname}`}>
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
                            <NewsList candidate={candidate} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Candidate.propTypes = {
    location: PropTypes.object,
    candiate: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired,
}

export default Candidate
