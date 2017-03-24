'use strict';

import React    from 'react';

class Button extends React.Component {
  transition;

  constructor(props) {
    super(props);
    this.transitionIn = this.transitionIn.bind(this)
    this.state = {
        transition  : "display_none",
        show        : false
    }
    //this.transition = this.props.transition
  }

  render() {
    return (
         <div className={"button wide horizontal " + this.props.color + " " + this.state.transition} onClick={this.props.onClick} ></div>
    )
  }

  componentWillMount() {
    if(this.props.hidden){

    } else {
      var that = this;
      setTimeout(function(){
        that.transitionIn();
      },this.props.delay);
    }
  }

  componentWillUpdate() {

  }

  transitionIn() {
    this.setState({
      transition    : this.props.transition,
      show          : true
    })
  }
}

export default Button;
