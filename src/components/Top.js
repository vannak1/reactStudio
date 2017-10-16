import React, { Component } from 'react';
import './Top.css';

export default class Top extends Component {
  render() {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper light-blue">
                    <a className="brand-logo center">Eachscape</a>
                </div>
            </nav>
        </div>
    );
  }
}


