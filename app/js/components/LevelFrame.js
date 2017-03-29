'use strict'

import React    from 'react';
import LevelOne from  './levels/LevelOne';
import Button   from  './Button'

class LevelFrame extends React.Component {
  counter;
  newFamily

  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.newLevel = this.newLevel.bind(this);

    this.state = {
      currentLevel  : 0
    }

    this.appendProps();
    //this.currentLevel = 0;
  }

  render() {
    return (
      <div>
        Hola Level Frame
        {this.newFamily[this.state.currentLevel]}
        <Button color="grey" onClick={this.next} />

      </div>
    )
  }

  next() {
    var counter = this.state.currentLevel;
    counter ++;
    if(counter > 1){
      this.setState({currentLevel:0});
    } else {
      this.setState({currentLevel:1});
    }
    console.log("Current Level: " + this.state.currentLevel);
  //  this.newLevel();
  }

  newLevel() {
    console.log("LevelFrame: Now with the new level");
    this.next();

  }

  appendProps() {
    console.log("appendProps");
    this.newFamily = React.Children.map(this.props.children,(child) => React.cloneElement(child, {
        newLevel : this.newLevel
      })
    );
    console.log(this.newFamily);
    return this.newFamily;
  }
}

export default LevelFrame;
