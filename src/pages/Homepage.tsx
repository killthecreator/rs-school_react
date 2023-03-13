import React, { Component } from 'react';

import SearchBar from './../components/Searchbar';
import Cards from './../components/Cards';

class HomePage extends Component {
  render() {
    return (
      <main>
        <SearchBar />
        <Cards />
      </main>
    );
  }
}

export default HomePage;
