'use strict';

import React from 'react';

import CountItem      from './level_counter/CountItem'

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>

        Header
        <CountItem />
        <CountItem />
        <CountItem />
        <CountItem />
        <CountItem />
        <CountItem />
      </header>
    );
  }

}

export default Header;
