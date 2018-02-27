import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class Room extends Component {

  render() {
    const room = this.props;
    const { title, description, items, doors } = room;
    return (
      <div className="room">
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>Doors</h3>
        <ul>
          <li></li>
        </ul>
      
      </div>

    )
  }
}