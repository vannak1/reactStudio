import React, { Component } from 'react';

import './Text.css';

export default class Text extends Component {
  render() {
    return (
      <div>
        <span>{this.props.children}</span>
      </div> 
    );
  }
}


