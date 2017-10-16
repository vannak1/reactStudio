import React, { Component } from 'react';
import './Main.css';
import Previewer from './Previewer.js';

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Previewer components={this.props.components} showCode={this.props.showCode} />
        <button className="waves-effect light-blue btn" onClick={this.props.handleShowCodeClick}>Show Snippet</button>
      </div>
    );
  }
}





