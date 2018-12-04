import React, { Component } from 'react'
import cards from './images/cards.jpg'
import blackjackName from './images/blackjack-name.jpg'
import './App.css'
class player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deck: [
        { face: '2', value: 2, suit: 'spades' },
        { face: '3', value: 3, suit: 'spades' },
        { face: '4', value: 4, suit: 'spades' },
        { face: '5', value: 5, suit: 'spades' },
        { face: '6', value: 6, suit: 'spades' },
        { face: '7', value: 7, suit: 'spades' },
        { face: '8', value: 8, suit: 'spades' },
        { face: '9', value: 9, suit: 'spades' },
        { face: '10', value: 10, suit: 'spades' },
        { face: 'jack', value: 10, suit: 'spades' },
        { face: 'queen', value: 10, suit: 'spades' },
        { face: 'king', value: 10, suit: 'spades' },
        { face: 'ace', value: 11, suit: 'spades' },
        { face: '2', value: 2, suit: 'hearts' },
        { face: '3', value: 3, suit: 'hearts' },
        { face: '4', value: 4, suit: 'hearts' },
        { face: '5', value: 5, suit: 'hearts' },
        { face: '6', value: 6, suit: 'hearts' },
        { face: '7', value: 7, suit: 'hearts' },
        { face: '8', value: 8, suit: 'hearts' },
        { face: '9', value: 9, suit: 'hearts' },
        { face: '10', value: 10, suit: 'hearts' },
        { face: 'jack', value: 10, suit: 'hearts' },
        { face: 'queen', value: 10, suit: 'hearts' },
        { face: 'king', value: 10, suit: 'hearts' },
        { face: 'ace', value: 11, suit: 'hearts' },
        { face: '2', value: 2, suit: 'clubs' },
        { face: '3', value: 3, suit: 'clubs' },
        { face: '4', value: 4, suit: 'clubs' },
        { face: '5', value: 5, suit: 'clubs' },
        { face: '6', value: 6, suit: 'clubs' },
        { face: '7', value: 7, suit: 'clubs' },
        { face: '8', value: 8, suit: 'clubs' },
        { face: '9', value: 9, suit: 'clubs' },
        { face: '10', value: 10, suit: 'clubs' },
        { face: 'jack', value: 10, suit: 'clubs' },
        { face: 'queen', value: 10, suit: 'clubs' },
        { face: 'king', value: 10, suit: 'clubs' },
        { face: 'ace', value: 11, suit: 'clubs' },
        { face: '2', value: 2, suit: 'diamonds' },
        { face: '3', value: 3, suit: 'diamonds' },
        { face: '4', value: 4, suit: 'diamonds' },
        { face: '5', value: 5, suit: 'diamonds' },
        { face: '6', value: 6, suit: 'diamonds' },
        { face: '7', value: 7, suit: 'diamonds' },
        { face: '8', value: 8, suit: 'diamonds' },
        { face: '9', value: 9, suit: 'diamonds' },
        { face: '10', value: 10, suit: 'diamonds' },
        { face: 'jack', value: 10, suit: 'diamonds' },
        { face: 'queen', value: 10, suit: 'diamonds' },
        { face: 'king', value: 10, suit: 'diamonds' },
        { face: 'ace', value: 11, suit: 'diamonds' }
      ],
      playerHand: [],
      dealerHand: []
    }
  }
  shuffle = () => {
    for (let index = 52 - 1; index > 1; index -= 1) {
      let otherIndex = Math.floor(Math.random() * index)

      let firstCard = this.state.deck[index]
      let secondCard = this.state.deck[otherIndex]

      this.state.deck[index] = secondCard
      this.state.deck[otherIndex] = firstCard
    }
  }
  dealCardToPlayer = () => {
    let card = this.state.deck.pop()
    this.state.playerHand.push(card)
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <body>
          <header>
            <title>Blackjack</title>
            <img class="title" src={blackjackName} height="100" />
          </header>
          <section class="hands">
            <ul class="player" />
            {this.state.playerHand.map(card => {
              return (
                <li>
                  `${card.face} of ${card.suit}`
                </li>
              )
            })}
            <button onClick={this.dealCardToPlayer} class="hit">
              hit
            </button>{' '}
            <button class="stay">stay</button>
            <section id="playerScore">0</section>
            <ul class="dealer" />
            <section id="dealerScore">0</section>
          </section>
        </body>
      </div>
    )
  }
}

export default App
