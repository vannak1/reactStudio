import React, { Component } from 'react';

import './Studio.css';
import Top from './Top.js'
import Side from './Side.js'
import Main from './Main.js'

export default class Studio extends Component {
  constructor(props) {
    super(props)
    this.state = {
        components: [],
        showCode: false,
    }
    
   this.handleTextComponentClick = this.handleTextComponentClick.bind(this);
   this.handleShowCodeClick = this.handleShowCodeClick.bind(this);
  }
  
  handleTextComponentClick() { 
    const newComponent = {
      parent: 'Text', 
      children: 'Text', 
      props: [],
      id: Date.now()
    }

    this.setState((prevState) => ({
        components: prevState.components.concat(newComponent),
    }));
  }
  
  handleShowCodeClick(){
    this.setState((prevState) => ({
      showCode: !prevState.showCode
    }));
  }
  render() {
    return (
      <div>
        <section className="Studio-top"> 
          <Top />  
        </section>
        <section className="Studio-side"> 
          <Side handleTextComponentClick={this.handleTextComponentClick} />
        </section>
        <section className="Studio-main">
          <Main components={this.state.components}  showCode={this.state.showCode} handleShowCodeClick={this.handleShowCodeClick}/>
        </section>
      </div> 
    );
  }
}


