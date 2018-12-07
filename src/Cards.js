import card_2_of_clubs from './images/cards/2_of_clubs.svg'
import card_3_of_clubs from './images/cards/3_of_clubs.svg'
import card_4_of_clubs from './images/cards/4_of_clubs.svg'
import card_5_of_clubs from './images/cards/5_of_clubs.svg'
import card_6_of_clubs from './images/cards/6_of_clubs.svg'
import card_7_of_clubs from './images/cards/7_of_clubs.svg'
import card_8_of_clubs from './images/cards/8_of_clubs.svg'
import card_9_of_clubs from './images/cards/9_of_clubs.svg'
import card_10_of_clubs from './images/cards/10_of_clubs.svg'
import card_jack_of_clubs from './images/cards/jack_of_clubs.svg'
import card_queen_of_clubs from './images/cards/queen_of_clubs.svg'
import card_king_of_clubs from './images/cards/king_of_clubs.svg'
import card_ace_of_clubs from './images/cards/ace_of_clubs.svg'
import card_2_of_hearts from './images/cards/2_of_hearts.svg'
import card_3_of_hearts from './images/cards/3_of_hearts.svg'
import card_4_of_hearts from './images/cards/4_of_hearts.svg'
import card_5_of_hearts from './images/cards/5_of_hearts.svg'
import card_6_of_hearts from './images/cards/6_of_hearts.svg'
import card_7_of_hearts from './images/cards/7_of_hearts.svg'
import card_8_of_hearts from './images/cards/8_of_hearts.svg'
import card_9_of_hearts from './images/cards/9_of_hearts.svg'
import card_10_of_hearts from './images/cards/10_of_hearts.svg'
import card_jack_of_hearts from './images/cards/jack_of_hearts.svg'
import card_queen_of_hearts from './images/cards/queen_of_hearts.svg'
import card_king_of_hearts from './images/cards/king_of_hearts.svg'
import card_ace_of_hearts from './images/cards/ace_of_hearts.svg'
import card_2_of_diamonds from './images/cards/2_of_diamonds.svg'
import card_3_of_diamonds from './images/cards/3_of_diamonds.svg'
import card_4_of_diamonds from './images/cards/4_of_diamonds.svg'
import card_5_of_diamonds from './images/cards/5_of_diamonds.svg'
import card_6_of_diamonds from './images/cards/6_of_diamonds.svg'
import card_7_of_diamonds from './images/cards/7_of_diamonds.svg'
import card_8_of_diamonds from './images/cards/8_of_diamonds.svg'
import card_9_of_diamonds from './images/cards/9_of_diamonds.svg'
import card_10_of_diamonds from './images/cards/10_of_diamonds.svg'
import card_jack_of_diamonds from './images/cards/jack_of_diamonds.svg'
import card_queen_of_diamonds from './images/cards/queen_of_diamonds.svg'
import card_king_of_diamonds from './images/cards/king_of_diamonds.svg'
import card_ace_of_diamonds from './images/cards/ace_of_diamonds.svg'
import card_2_of_spades from './images/cards/2_of_spades.svg'
import card_3_of_spades from './images/cards/3_of_spades.svg'
import card_4_of_spades from './images/cards/4_of_spades.svg'
import card_5_of_spades from './images/cards/5_of_spades.svg'
import card_6_of_spades from './images/cards/6_of_spades.svg'
import card_7_of_spades from './images/cards/7_of_spades.svg'
import card_8_of_spades from './images/cards/8_of_spades.svg'
import card_9_of_spades from './images/cards/9_of_spades.svg'
import card_10_of_spades from './images/cards/10_of_spades.svg'
import card_jack_of_spades from './images/cards/jack_of_spades.svg'
import card_queen_of_spades from './images/cards/queen_of_spades.svg'
import card_king_of_spades from './images/cards/king_of_spades.svg'
import card_ace_of_spades from './images/cards/ace_of_spades.svg'

const CARDS = {
  '2_clubs': card_2_of_clubs,
  '3_clubs': card_3_of_clubs,
  '4_clubs': card_4_of_clubs,
  '5_clubs': card_5_of_clubs,
  '6_clubs': card_6_of_clubs,
  '7_clubs': card_7_of_clubs,
  '8_clubs': card_8_of_clubs,
  '9_clubs': card_9_of_clubs,
  '10_clubs': card_10_of_clubs,
  jack_clubs: card_jack_of_clubs,
  queen_clubs: card_queen_of_clubs,
  king_clubs: card_king_of_clubs,
  ace_clubs: card_ace_of_clubs,
  '2_hearts': card_2_of_hearts,
  '3_hearts': card_3_of_hearts,
  '4_hearts': card_4_of_hearts,
  '5_hearts': card_5_of_hearts,
  '6_hearts': card_6_of_hearts,
  '7_hearts': card_7_of_hearts,
  '8_hearts': card_8_of_hearts,
  '9_hearts': card_9_of_hearts,
  '10_hearts': card_10_of_hearts,
  jack_hearts: card_jack_of_hearts,
  queen_hearts: card_queen_of_hearts,
  king_hearts: card_king_of_hearts,
  ace_hearts: card_ace_of_hearts,
  '2_diamonds': card_2_of_diamonds,
  '3_diamonds': card_3_of_diamonds,
  '4_diamonds': card_4_of_diamonds,
  '5_diamonds': card_5_of_diamonds,
  '6_diamonds': card_6_of_diamonds,
  '7_diamonds': card_7_of_diamonds,
  '8_diamonds': card_8_of_diamonds,
  '9_diamonds': card_9_of_diamonds,
  '10_diamonds': card_10_of_diamonds,
  jack_diamonds: card_jack_of_diamonds,
  queen_diamonds: card_queen_of_diamonds,
  king_diamonds: card_king_of_diamonds,
  ace_diamonds: card_ace_of_diamonds,
  '2_spades': card_2_of_spades,
  '3_spades': card_3_of_spades,
  '4_spades': card_4_of_spades,
  '5_spades': card_5_of_spades,
  '6_spades': card_6_of_spades,
  '7_spades': card_7_of_spades,
  '8_spades': card_8_of_spades,
  '9_spades': card_9_of_spades,
  '10_spades': card_10_of_spades,
  jack_spades: card_jack_of_spades,
  queen_spades: card_queen_of_spades,
  king_spades: card_king_of_spades,
  ace_spades: card_ace_of_spades
}

const imageForFaceAndSuit = (face, suit) => {
  const card = CARDS[`${face}_${suit}`]

  return card
}

export default imageForFaceAndSuit
