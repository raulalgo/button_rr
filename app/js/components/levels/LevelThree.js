'use strict'

import React            from  'react';
import Button           from  '../Button'
import RipplerButton    from  '../RipplerButton'
import TogglerButton    from  '../TogglerButton'
import GameBoard        from  '../GameBoard'

class LevelThree extends React.Component {
  toggler;

  constructor(props) {
    super(props);

    this.initiate = this.initiate.bind(this)

    this.state = {
      initiated : false,
      extra     : ""
    }

  }

  render() {
    if(this.state.initiated) {
      this.toggler = <TogglerButton color="orange" newLevel={this.props.newLevel}/>
    } else {
      this.toggler = <Button color="grey" transition="fall" />
    }
    return(
      <div className="boardWrapper">
        <GameBoard height="height_1 m20">
          {this.toggler}
        </GameBoard>
        <Button color="blue" onClick={this.initiate} extra={this.state.extra} />
      </div>
    );
  }

  initiate() {
    this.setState({
      initiated : true,
      extra     : "deactivate"
    });
  }
}

export default LevelThree;
// <TogglerButton color="white" />
// <TogglerButton color="white" />
// <TogglerButton color="white" />
