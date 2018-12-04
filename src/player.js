import React, { Component } from 'react';
import deck from './deck';

class player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerHand: []
    }
  }
}
  const dealCardToPlayer = () => {
    let card = deck.pop()
    playerHand.push(card)
  }
  render() {
    return (
      <div>
        <ul class="player" />
        
        <button onClick={this.dealCardToPlayer}>hit</button> <button class="stay">stay</button>
            <section id="playerScore">0</section>
      </div>
    );
  }

export default player;
