import React, { Component } from 'react';
import Card from './Card';
import cardsData from './../data/cardsData';

class Cards extends Component {
  render() {
    return (
      <ul className="cards">
        {cardsData.map((cardData, index) => (
          <Card key={index} {...cardData} />
        ))}
      </ul>
    );
  }
}

export default Cards;
