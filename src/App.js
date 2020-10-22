import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactProject from './components/pages/ReactProject';
import Home from './components/pages/Home';
import ReverseString from './components/pages/ReverseString';
import CharacterCount from './components/pages/CharacterCount';
import './App.css'; 
import background from './images/rbgimg.jpg';

function App() {
    return (
      <Router>     
        <Navbar/>
        <Switch>
          <Route path='/react-project' exact component={ReactProject}></Route>
          <Route path='/home' exact component={Home}></Route>
          <Route path='/reverse-string' exact component={ReverseString}></Route>
          <Route path='/character-count' exact component={CharacterCount}></Route>
        </Switch>
        <img className="background-image" alt="space react bg" src={background}></img>
      </Router>
    );
}

export default App;
