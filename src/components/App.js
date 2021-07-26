import React, { Component } from 'react';

import Searchbar from './Searchbar';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearchSubmit} />
      </>
    );
  }
}

export default App;
