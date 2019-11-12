import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import CandidatePage from '../components/CandidatePage'

export default (props) => {
  return (
    <StaticQuery
      query={graphql`
        query CapsuleerCandidates {
          allCandidatesYaml(filter: {status: {eq: "capsuleer"}}, sort: {fields: name}) {
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
          location={props.location}
          status={props.transitionStatus}
          candidates={data.allCandidatesYaml.nodes}
          news={data.allNewsYaml.nodes}
          title="YC122 Elections - Capsuleer Candidates"
        />
      )}
    />
  )
}
