import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import CandidatePage from '../components/CandidatePage'

export default (props) => {
  return (
    <StaticQuery
      query={graphql`
        query CapsuleerCandidates {
          allContentfulGallenteElectionsCandidate(filter: {status: {eq: "capsuleer"}}, sort: {fields: name}) {
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
          allContentfulGallenteElectionsNews(filter: {url: {ne: ""}}, sort: {fields: updated, order: DESC}) {
            nodes {
              id
              url
              title
              candidates {
                name
              }
              updated
            }
          }
        }
      `}
      render={data => (
        <CandidatePage
          state={props.exit.state}
          location={props.location}
          status={props.transitionStatus}
          candidates={data.allContentfulGallenteElectionsCandidate.nodes}
          news={data.allContentfulGallenteElectionsNews.nodes}
          title="YC122 Elections - Capsuleer Candidates"
        />
      )}
    />
  )
}
