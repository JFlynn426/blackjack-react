import React, { Component } from 'react'
import deck from './deck'

class Dealer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dealerHand: []
    }

    const dealCardToDealer = () => {
      let card = deck.pop()
      dealerHand.push(card)
    }
  }
  render() {
    return (
      <div>
        <ul>
          <section id="dealerScore">0</section>
        </ul>
      </div>
    )
  }
}

export default Dealer
