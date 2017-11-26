import React, { Component } from 'react';
import Navbar from './Navbar';
import Boxes from './Boxes';
import './MemoryGame.css';

// 16 cards, 8 cards by 2 rows
// click on a card to see its color
// click on another to see its color
// match, cards stay visible
// no match, colors fade back to grey
// keep going until all cards matched, then start new game
// also, start new game from navbar

class MemoryGame extends Component {

  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        
      ]
    }
  }

  render() {
    return (
      <div className="MemoryGame">
        <Navbar />
        <Boxes />
      </div>
    );
  }
}

export default MemoryGame;
