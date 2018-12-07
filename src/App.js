import React, { Component } from 'react'
import imageForFaceAndSuit from './Cards'
import blackjackName from './images/blackjack-name.jpg'
import './App.css'
import update from 'immutability-helper'

class App extends Component {
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
      player: [],
      dealer: [],
      playerScore: 0,
      dealerScore: 0,
      playing: true,
      gameResults: 'Play a game!'
    }
  }
  shuffle = () => {
    let newArray = update(this.state.deck, {})

    for (let index = 52 - 1; index > 1; index -= 1) {
      let otherIndex = Math.floor(Math.random() * index)

      let firstCard = this.state.deck[index]
      let secondCard = this.state.deck[otherIndex]

      newArray[index] = secondCard
      newArray[otherIndex] = firstCard
    }

    this.setState({
      deck: newArray
    })
  }
  componentDidMount = async () => {
    this.shuffle()
    await this.dealCard(2, 'player')
    await this.dealCard(2, 'dealer')
  }

  componentDidUpdate = () => {
    if (this.state.playerScore > 21 && this.state.playing) {
      this.setState({
        gameResults: 'Player Busted!',
        playing: false
      })
    }
    if (this.state.dealerScore > 21 && this.state.playing) {
      this.setState({
        gameResults: 'Dealer Busted!',
        playing: false
      })
    }
  }

  stayButton = async () => {
    while (this.state.dealerScore <= 17 && this.state.playing) {
      await this.dealCard(1, 'dealer')
    }
    if (
      this.state.playerScore <= this.state.dealerScore &&
      this.state.playing
    ) {
      this.setState({
        gameResults: 'Dealer Wins!',
        playing: false
      })
    }
    if (this.state.playerScore > this.state.dealerScore && this.state.playing) {
      this.setState({
        gameResults: 'Player Wins!',
        playing: false
      })
    }
  }
  dealCard = async (count, recipient) => {
    if (this.state.playing === true) {
      let cards = []
      let total = 0

      for (let iterations = 0; iterations < count; iterations++) {
        const card = this.state.deck[iterations]
        cards.push(card)
        total += card.value
      }

      const score = `${recipient}Score`
      const newState = {
        [score]: this.state[score] + total,
        deck: update(this.state.deck, { $splice: [[0, count]] }),
        [recipient]: update(this.state[recipient], { $push: cards })
      }

      await this.setState(newState)
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <title>Blackjack</title>
          <img className="title" src={blackjackName} height="100" />
        </header>
        <h1>{this.state.gameResults}</h1>
        <section className="controls">
          <button
            onClick={() => this.dealCard(1, 'player', 'playerScore')}
            className="button"
          >
            HIT
          </button>
          <button className="button" onClick={() => this.stayButton()}>
            STAY
          </button>
        </section>
        <section className="scores">
          <p>Player Score Is: {this.state.playerScore}</p>
          <p>Dealer Score Is: {this.state.dealerScore}</p>
        </section>
        <section className="hands">
          <ul className="player">
            {this.state.player.map((card, index) => {
              return (
                <img
                  alt={index}
                  src={imageForFaceAndSuit(card.face, card.suit)}
                />
              )
            })}
          </ul>
          <ul className="dealer">
            {this.state.dealer.map((card, index) => {
              return (
                <img
                  alt={index}
                  src={imageForFaceAndSuit(card.face, card.suit)}
                />
              )
            })}
          </ul>
        </section>
      </div>
    )
  }
}

export default App
