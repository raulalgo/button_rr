'use strict'

import React    from 'react';
import LevelOne from  './levels/LevelOne';

class LevelFrame extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Hola LevelFrame
        <LevelOne />
      </div>
    )
  }
}

export default LevelFrame;
