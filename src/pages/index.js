import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import CandidatePage from '../components/CandidatePage'

export default (props) => {
  return (
    <StaticQuery
      query={graphql`
        query ConfirmedCandidates {
          allContentfulGallenteElectionCandidate(filter: {status: {eq: "confirmed"}}, sort: {fields: name}) {
            nodes {
              id
              name
              status
              characterId
              description {
                description
              }
            }
          }
        }
      `}
      render={data => (
        <CandidatePage
          state={props.exit.state}
          location={props.location}
          status={props.transitionStatus}
          candidates={data.allContentfulGallenteElectionCandidate.nodes}
          title="Confirmed Candidates"
        />
      )}
    />
  )
}
