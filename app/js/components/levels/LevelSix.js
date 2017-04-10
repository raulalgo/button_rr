'use strict'

import  React             from  'react';

import  Button            from  '../Button';
import  TogglerButton     from  '../TogglerButton';
import  GameBoard         from  '../GameBoard';

class LevelSix extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      extra : null
    }
  }

  render() {
    return(
      <div className="boardWrapper">
        <GameBoard height="height_4" >
        </GameBoard>
        <Button color="blue" onClick="" extra={this.state.extra} transition="fall" delay={500} lights={true} />
      </div>
    )
  }
}

export default LevelSix;
