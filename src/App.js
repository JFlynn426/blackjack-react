import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <body>
          <header>
            <title>Blackjack</title>
            <img class="title" src="images/blackjack name.jpg" height="100" />
          </header>
          <section class="hands">
            <ul class="player" />
            <button class="hit">hit</button> <button class="stay">stay</button>
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
