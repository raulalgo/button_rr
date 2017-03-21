'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

import Button         from '../components/Button'
import RipplerButton  from '../components/RipplerButton'

const propTypes = {
  currentUser: React.PropTypes.object
};

class HomePage extends React.Component {
  clicked;

  componentWillMount() {
    //  this.handleClick = this.handleClick.bind(this);
      this.clicked = false
      this.setState ({clicked : this.clicked,
                      x       : 0,
                      y       : 0})
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="Home">
        <section className="home-page">
          <Button color="blue" transition="fall" />
          <RipplerButton color="orange" transition="fall" clicked={this.clicked} onClick={this.handleClick} x={this.state.x} y={this.state.y}/>

        </section>
      </DocumentTitle>
    );
  }

  handleClick(e) {
    // this.clicked = true
    // console.log("X: " + e.nativeEvent.clientX);
    // console.log("Y: " + e.nativeEvent.clientY);
    // this.setState({ clicked : this.clicked,
    //                 x       : e.nativeEvent.clientX,
    //                 y       : e.nativeEvent.clientY})
  }
}

HomePage.propTypes = propTypes;

export default HomePage;
