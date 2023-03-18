import React, { Component } from 'react';
import Form from './../components/Form';
import Cards from './../components/Cards';

class FormPage extends Component {
  state = {
    activeCards: [] as CardProps[],
  };

  addCard(card: CardProps) {
    const newState = this.state;
    newState.activeCards = newState.activeCards.concat(card);
    this.setState(newState);
  }

  render() {
    return (
      <main>
        <Form addCard={this.addCard.bind(this)} />
        <Cards cards={this.state.activeCards} />
      </main>
    );
  }
}

export default FormPage;
