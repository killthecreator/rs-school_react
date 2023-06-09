import React, { Component } from 'react';

import SearchBar from './../components/Searchbar';
import Cards from './../components/Cards';
import cardsData from './../data/cardsData';

class HomePage extends Component {
  state = {
    activeCards: cardsData,
  };

  filterCards(value: string) {
    this.setState({
      activeCards: cardsData.filter((card) => {
        return (
          card.title.toLocaleLowerCase().includes(value.toLowerCase()) ||
          card.price.toString().includes(value) ||
          card.text.toLocaleLowerCase().includes(value.toLowerCase())
        );
      }),
    });
  }

  render() {
    return (
      <main>
        <SearchBar filterCards={this.filterCards.bind(this)} />
        <Cards cards={this.state.activeCards} />
      </main>
    );
  }
}

export default HomePage;
