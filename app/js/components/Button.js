'use strict';

import React    from 'react';

class Button extends React.Component {
  transition;

  constructor(props) {
    super(props);
    this.state = {
        transition  : "",
        show        : false
    }
    //this.transition = this.props.transition
  }

  render() {
    if(this.state.show) {
      return (
        <div className={"button wide horizontal " + this.props.color + " " + this.state.transition} onClick={this.props.onClick} ></div>
      )
    }
    else {
      return(
        <div></div>
      );
    }
  }

  componentWillMount() {
    var that = this;
    setTimeout(function(){
      that.transitionIn();
    },this.props.delay);
  }

  transitionIn() {
    this.setState({
      transition    : this.props.transition,
      show          : true
    })
  }
}

export default Button;
