import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Layout from './layout'
import Header from './Header'
import Footer from './Footer'
import Button from './Button'
import Candidate from './Candidate'
import Link from './Link'

import Carousel from 'nuka-carousel';

class CandidatePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = Object.assign({
      base: false,
      ui: false,
      content: false,
    }, props.state, {
      fading: false,
    })
    
    this.transitionOut = this.transitionOut.bind(this);
  }
  
  transitionOut(exit, node) {
    this.setState({
      ui: true,
      content: false,
      fading: true,
    })
  }
  
  componentDidMount () {
    this.timeoutId = setTimeout(() => {
      this.setState({
        ui: true,
        content: true
      });
    }, 250);
  }
  componentWillUnmount () {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
  
  render() {
    return (
      <Layout fading={this.state.fading} base={this.state.base} ui={this.state.ui} content={this.state.content} location={this.props.location}>
        <Helmet>
          <title>{this.props.title}</title>
          <meta name="og:title" content={`YC122 Elections${this.props.title ? ' - ' : ''}${this.props.title}`}/>
        </Helmet>
        <Header><h2 className="align-center">YC122 Elections{this.props.title ? ' - ' : ''}{this.props.title}</h2></Header>
        <div className="main" id="main">
          <Carousel
              autoplay={false}
              withoutControls={false}
              renderCenterLeftControls={({ previousSlide }) => (<Button onClick={previousSlide}>&larr;</Button> )}
              renderCenterRightControls={({ nextSlide }) => (<Button onClick={nextSlide}>&rarr;</Button> )}
              cellAlign="center"
              easing="easeExpInOut"
              slideIndex={this.state.slideIndex}
              afterSlide={slideIndex => this.setState({ slideIndex })}
              transitionMode="scroll"
            >
            {this.props.candidates.map((node, index) => (
              <Candidate key={node.id} candidate={node} active={this.state.slideIndex === index} location={this.props.location}/>
            ))}
          </Carousel>
        </div>
        <Footer>
          <Link
              className="button"
              to="/"
              trigger={this.transitionOut}
              duration={1}
              state={{base: true, ui: true, content: false}}
            >Confirmed</Link>
          <Link
              className="button"
              to="/speculated"
              trigger={this.transitionOut}
              duration={1}
              state={{base: true, ui: true, content: false}}
            >Speculated</Link>
          <Link
              className="button"
              to="/withdrawn"
              trigger={this.transitionOut}
              duration={1}
              state={{base: true, ui: true, content: false}}
            >Withdrawn</Link>
        </Footer>
      </Layout>
      )
    }
  }
  
  CandidatePage.propTypes = {
    location: PropTypes.object,
    candidates: PropTypes.array,
    title: PropTypes.string,
    transitionStatus: PropTypes.string,
  }
  
  export default CandidatePage
