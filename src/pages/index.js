import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import CandidatePage from '../components/CandidatePage'

export default (props) => {
  return (
    <StaticQuery
      query={graphql`
        query ConfirmedCandidates {
          allCandidatesYaml(filter: {status: {eq: "confirmed"}}, sort: {fields: name}) {
            nodes {
              name
              short_name
              character_id
              description
            }
          }
          allNewsYaml(sort: {fields: updated}, filter: {url: {ne: ""}}) {
            nodes {
              url
              title
              date
              candidates
            }
          }
        }
      `}
      render={data => (
        <CandidatePage
          state={props.exit.state}
          location={props.location}
          status={props.transitionStatus}
          candidates={data.allCandidatesYaml.nodes}
          news={data.allNewsYaml.nodes}
          title="YC122 Elections - Confirmed Candidates"
        />
      )}
    />
  )
}
