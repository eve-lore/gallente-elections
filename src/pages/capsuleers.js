import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Candidate from '../components/Candidate'

import Carousel from 'nuka-carousel';

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timeout: false,
      loading: true,
      slideIndex: 0
    }
  }
  
  switchToSlide(index) {
    console.log("Slide: ", index);
    this.setState({slideIndex: index});
  }
  
  componentDidMount () {
    this.timeoutId = setTimeout(() => {
      this.setState({loading: false});
    }, 250);
  }
  componentWillUnmount () {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
  
  render() {
    return (
      <StaticQuery
        query={graphql`
          query Capsuleers {
            allCapsuleersYaml(filter: {status: {eq: "active"}}, sort: {fields: name}) {
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
          <Layout timeout={this.state.timeout} loading={this.state.loading}>
            <Header timeout={this.state.timeout}><h2 className="align-center">YC122 Federation Elections - Capsuleers</h2></Header>
            <div className="main" id="main">
              <Carousel
                autoplay={false}
                withoutControls={true}
                cellAlign="center"
                easing="easeExpInOut"
                slideIndex={this.state.slideIndex}
                afterSlide={slideIndex => this.setState({ slideIndex })}
                transitionMode="scroll"
                >
                {data.allCapsuleersYaml.nodes.map((node, index) => (
                  <Candidate candidate={node} active={this.state.slideIndex === index} news={data.allNewsYaml.nodes}/>
                ))}
              </Carousel>
            </div>
            <Footer timeout={this.state.timeout}>
              {data.allCapsuleersYaml.nodes.map((node, index) => (
                <Button active={this.state.slideIndex === index} onClick={this.switchToSlide.bind(this, index)}>{node.short_name ? node.short_name : node.name}</Button>
              ))}
            </Footer>
          </Layout>
        )}
      />
    )
  }
}

export default IndexPage
