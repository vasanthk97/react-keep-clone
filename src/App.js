import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyCard from './MyCard.js'

class App extends Component {
	constructor(props){
		super(props);
	}
  render() {
    return (
      <MyCard state={this.props}/>
    );
  }
}

export default App;
