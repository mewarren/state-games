import React, { Component } from 'react';
import './app.css';
import Player from './player/Player';
import { start, rooms } from './rooms/rooms';

export default class App extends Component {



  state = {
    rooms,
    room: start,
    player: {
      name: 'player name',
      health: 0,
      skill: 0,
      disguise: 0
    },
    // rooms:
  };

  
  
  render() {
    const { player } = this.state;

    return (
      <header>
        <h1>Blood Rave</h1>
        <Player player={player}/>
      </header>
    );
  }
}

