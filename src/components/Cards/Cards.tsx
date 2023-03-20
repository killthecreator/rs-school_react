import React, { Component } from 'react';
import Card from '../Card/Card';

class Cards extends Component<CardsProps> {
  state = {
    cards: this.props.cards,
  };

  static getDerivedStateFromProps(nextProps: CardsProps) {
    return { cards: nextProps.cards };
  }

  render() {
    return (
      <ul className="cards" data-testid="cards">
        {this.state.cards.map((cardData, index) => (
          <Card key={index} {...cardData} />
        ))}
      </ul>
    );
  }
}

export default Cards;
