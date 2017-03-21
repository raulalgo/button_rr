'use strict';

import React from 'react';

class Button extends React.Component{
  hide;
  flag;

  constructor(props) {
    super(props);
    console.log(this.props.clicked);
    this.rippleStyle = ({top  : this.props.x,
                         left : this.props.y});
    this.flag = false;
    this.t_w_classes = "transition_wrapper display_none"
    this.tr_classes = ""
    //this.setState({clicked : this.props.clicked})

  }

  render() {


    this.rippleStyle = ({left  : this.props.x-50,
                         top : this.props.y-50})

    return (
      <div >
        <div className={this.t_w_classes}>
          <div className={'transitioner' + this.tr_classes } style={this.rippleStyle}> </div>
        </div>
        <div className={"button wide horizontal " + this.props.color + " " + this.props.transition} onClick={this.props.onClick} ></div>
      </div>
    );
  }

  componentWillMount(){
    console.log("will mount");
    this.rippleStyle = ({top  : this.props.x + 'px',
                         left : this.props.y + 'px'})
    console.log(this.rippleStyle);
  }

  componentWillUpdate() {

    console.log("will update");
    if(!this.flag){
      //this.flag = true
    }
    else {
      this.t_w_classes = "transition_wrapper"
      this.tr_classes = " ripple"
    }

  }

  componentDidUpdate() {
    if(!this.flag){
      this.flag = true
    }
    else {

    }
  }

}

export default Button;
