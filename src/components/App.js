import React, { Component } from 'react';
import './app.css';
import Player from './player/Player';
import { start, rooms } from './rooms/rooms';
import Room from './rooms/Room';
export default class App extends Component {



  state = {
    rooms,
    room: start,
    player: {
      name: 'player name',
      health: 0,
      skill: 0,
      disguise: 0
    }
  };

  handleMove = roomKey => {
    this.setState({
      room: this.state.rooms[roomKey]
    });
  };
  
  render() {
    const { player, room } = this.state;
    console.log('room from state: ', room);

    return (
      <div>
        <header>
          <h1>BloodRave</h1>
          <Player player={player}/>
        </header>
        <main>
          <Room room={room} onMove={this.handleMove}/>
        </main>
      </div>
    );
  }
}

