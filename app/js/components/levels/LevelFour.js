'use strict'

import  React              from  'react';

import  Button             from   '../Button'
import  GameBoard          from   '../GameBoard'
import  TogglerButton      from   '../TogglerButton'

class LevelFour extends React.Component {
  num_options;
  color_array;
  winner;
  clicked_flag;


  constructor(props) {
    super(props);
    this.initiate = this.initiate.bind(this);

    this.num_options = 4
    this.color_array = [];
    this.clicked_flag = false;

    for(var i=0; i<this.num_options ; i++) {
        this.color_array[i] = "grey"
    }

    this.state = {
      extra   : "",
      colors  : {
        0 : this.color_array[0],
        1 : this.color_array[1],
        2 : this.color_array[2],
        3 : this.color_array[3]
      }
    }


  }

  render() {
    return(

      <div className="boardWrapper">
        <GameBoard height="height_4 m20">
          <TogglerButton name="Toggler1" color={this.state.colors[0]} newLevel={this.props.newLevel} />
          <TogglerButton name="Toggler2" color={this.state.colors[1]} newLevel={this.props.newLevel} />
          <TogglerButton name="Toggler3" color={this.state.colors[2]} newLevel={this.props.newLevel} />
          <TogglerButton name="Toggler4" color={this.state.colors[3]} newLevel={this.props.newLevel} />
        </GameBoard>
        <Button color="blue" onClick={this.initiate} extra={this.state.extra} />
      </div>
    )
  }

  initiate() {
    if(!this.clicked_flag)
    {
      var winner = Math.floor(Math.random()*this.num_options);
      console.log(winner);
      for(var i=0 ; i < this.num_options ; i++) {
        this.color_array[i] = "white"
      }
      this.color_array[winner] = "orange"

      this.setState({
        extra   : "deactivate",
        colors  : {
          0 : this.color_array[0],
          1 : this.color_array[1],
          2 : this.color_array[2],
          3 : this.color_array[3]
        }
      }, function(){
        //console.log("color 3: " + this.state.colors[3]);
      })
      this.clicked_flag=true;
    }
  }
}

export default LevelFour;
