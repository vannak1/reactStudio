import React, { Component } from 'react';
import './Side.css';

export default class Side extends Component {
  render() {
    return (
      <div className='Side'>
        <ul>
          <li>
            <button className="waves-effect waves-light light-blue btn-large" onClick={this.props.handleTextComponentClick}>Text</button>
          </li>
        </ul>
      </div>
    );
  }
}


