import React, { Component } from 'react';
import './App.css';
import Wrapper from "./Components/Wrapper";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
// import Row from "./Components/Row";
// import Col from "./Components/Col";
// import Game from "./Components/Game";
import Title from "./Components/Title";
import coins from "./coins.json";
import CoinCard from './Components/Card';

class App extends Component {

  state = {
    coins,
    prompt: "Click an image to start!",
    unClicked: coins,
    currentScore: 0,
    topScore: 0
  };

  componentDidMount() {
    // Randomize Coins

  }

//   shuffleArray = (array) => {
//     let shuffledArr = [];
//     array.map(coin =>{
//         let randomizer = Math.random();
//         randomizer > 0.5 ?
//         shuffledArr = [...shuffledArr,coin]
//         : shuffledArr = [coin,...shuffledArr]
//     });
//     return shuffledArr;
// }

// //finds the index of the clicked card from cards
// findCoinIndex = (array,id) =>{
//     const clickedCoin = array.filter(Coin=>Coin.id===id);
//     return array.indexOf(clickedCoin[0]);
// }

  // randomize cards/array
// random = Coins => {
//   var rCoin = Math.random(coins)
// }
  // random = coins => {
  //   var rcoin = 
  // }

  // onclick functionality for when picture is clicked / check state to see if it has already been clicked

  clicked = id => {
    const checkCoin = this.state.unClicked.find(coin => coin.id === id);

    // if true; card has already been checked; reset game
    if (checkCoin === undefined) {
      this.setState({
        prompt: "Game over! You already clicked that coin.",
        // reset score
        currentScore: 0,
        // function to add top score if top score
        topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.statetopScore,
        // reset random images
        coins
      });
    }
    // remove clicked card / change state / game continues
    else {
      var coinRemove = this.state.unClicked.filter(coin => coin.id !== id);
      // flip boolean value / state of clicked card

      // update state from recently clicked image
      this.setState({
        prompt: "",
        currentScore: this.state.currentScore + 1,
        unClicked: coinRemove
      });
    }
    console.log(coinRemove);
  }

  render() {
    return (
      <Wrapper>
        <Navbar
          prompt={this.state.prompt}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />

        <Title> Crytpo Memory Game!</Title>

        {/* set up data output and assign clicks */}


          {this.state.coins.map(coins => (
            <CoinCard
              key={coins.id}
              name={coins.name}
              url={coins.url}
              id={coins.id}
              clicked={this.clicked}
              score={this.score}
            />

          ))}


        <Footer/>
      </Wrapper>
    );
  }
}

export default App;
