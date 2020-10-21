import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ReverseString from './components/pages/ReverseString';
import CharacterCount from './components/pages/CharacterCount';
import './App.css'; 
import background from './rbgimg.jpg';

function App() {
    return (
      <Router>     
        <Navbar/>
        <Switch>
          <Route path='/home' exact component={Home}></Route>
          <Route path='/reverse-string' exact component={ReverseString}></Route>
          <Route path='/character-count' exact component={CharacterCount}></Route>
        </Switch>
        <img className="background-image" src={background}></img>
      </Router>
    );
}

export default App;
