import React, { Component } from 'react';

import './App.css';
import {Route } from 'react-router-dom';
import List from './component/List';
import Line from './component/Line';


const Store = () => ( <List></List>)
const LineNotify = () => (
  <div>
    <h1>Test 2</h1>
    <Line></Line>
  </div>
)

class App extends Component{
  render(){
    return (
      <div className="App wrap"> 
        <Route path="/store" component= {Store}/>
        <div className="row"><Route path="/lineNotify" component= {LineNotify}/>
        </div>
      </div>
    )
  }
}
export default App;
