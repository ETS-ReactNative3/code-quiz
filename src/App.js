import React, { Component } from 'react';
import update from 'immutability-helper';
import Card from './Card.js';
import { randomFromFifty } from './helpers.js'
import './App.css';

class App extends Component {

  state = {
    type: '',
    cardNum: 0,
    flipped: false,
    rotation: 0,
    cardsSeen: [],
    notice: ''
  }

  flipCard = () => {
    const flipped = !this.state.flipped;
    const rotation = this.state.rotation === 0 ? 360 : 0;
    this.setState({ flipped, rotation });
  }

  handleCardSelect = (e) => {
    let notice = '';
    const type = e.target.innerText;
    const flipped = false;
    const rotation = this.state.rotation === 0 ? 360 : 0;
    let cardNum = randomFromFifty();
    let counter = 0;
    if (this.state.cardsSeen.filter(card => card.startsWith(type)).length >= 50) {
      notice = `You went through all of the ${type} cards! Try another subject.`
    } else {
      while (this.state.cardsSeen.includes(`${type}${cardNum}`)) {
        if (counter > 50) break;
        cardNum = randomFromFifty();
        counter++
      }
    }
    const newState = update(this.state,
      {
        type:      { $set: type },
        cardNum:   { $set: cardNum },
        flipped:   { $set: flipped },
        rotation:  { $set: rotation },
        cardsSeen: { $push: [`${type}${cardNum}`]},
        notice:    { $set: notice }
      });
    this.setState(newState);
  }

  componentWillMount() {
    const type = ['CSS', 'JS', 'HTML', 'Ruby'][Math.floor(Math.random() * 4)]
    let cardNum = randomFromFifty();

    const newState = update(this.state,
      {
        type:      { $set: type },
        cardNum:   { $set: cardNum },
        cardsSeen: { $push: [`${type}${cardNum}`]}
      });
    this.setState(newState);
  }

  render() {

    const { flipped, cardNum, type, rotation, notice } = this.state
    console.log(this.state.cardsSeen.sort());
    return (
      <div className={"App " + type}>
        <p className={notice ? 'notice' : ''}>{notice}</p>
        <div className="container">
          <h1 className={flipped ? 'flipped' : null } >{type}</h1>
          { cardNum > 0 ? (
              <Card
                type={type}
                cardNum={cardNum}
                flipped={flipped}
                rotation={rotation}
                onClick={this.flipCard}
              />
        ) : undefined }
          <div className="btn-group">
            <button onClick={this.handleCardSelect} >
              <span className="long-shadow">CSS</span>
            </button>
            <button
              onClick={this.handleCardSelect} >
              <span className="long-shadow">HTML</span>
            </button>
            <button onClick={this.handleCardSelect} >
              <span className="long-shadow">JS</span>
            </button>
            <button onClick={this.handleCardSelect} >
              <span className="long-shadow">Ruby</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
