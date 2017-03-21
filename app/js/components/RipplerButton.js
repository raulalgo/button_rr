'use strict';

import React    from 'react';

import Button   from './Button';
import Rippler  from './Rippler';

class RipplerButton extends React.Component{
  hide;
  flag;

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    console.log(this.props.color);
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
    if(this.flag) {
      this.t_w_classes ="transition_wrapper";
    }
    console.log(this.t_w_classes);
    return (
      <div >
        <Rippler t_w_classes={this.t_w_classes} tr_classes={this.tr_classes} x={this.props.x} y={this.props.y} />
        <Button color={this.props.color} transition={this.props.transition} onClick={this.handleClick}/>
      </div>
    );
  }

  handleClick(e) {
    console.log("clicked: " + this.props.color);
    console.log(e.nativeEvent);
    
    // console.log("X: " + e.nativeEvent.clientX);
    // console.log("Y: " + e.nativeEvent.clientY);
    // this.setState({ clicked : this.clicked,
    //                 x       : e.nativeEvent.clientX,
    //                 y       : e.nativeEvent.clientY})

  }

  componentWillMount(){
  }

  componentWillUpdate() {

  }

  componentDidUpdate() {

  }

}

export default RipplerButton;

/*
<div className={this.t_w_classes}>
  <div className={'transitioner' + this.tr_classes } style={this.rippleStyle}> </div>
</div>
*/
