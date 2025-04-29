import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactProject from './components/pages/JWidgets';
import Home from './components/pages/Home';
import ReverseString from './components/pages/ReverseString';
import CharacterCount from './components/pages/CharacterCount';
import Weather from './components/pages/Weather';
import Calculator from './components/pages/calculator/calculator';
import Checklist from './components/pages/Checklist';
import './App.css'; 

function App() {
    return (
      <Router>     
        <Navbar/>
        <Switch>
          <Route path='/react-project' exact component={ReactProject}></Route>
          <Route path='/home' exact component={Home}></Route>
          <Route path='/checklist' exact component={Checklist}></Route>
          <Route path='/calculator' exact component={Calculator}></Route>
          <Route path='/reverse-string' exact component={ReverseString}></Route>
          <Route path='/character-count' exact component={CharacterCount}></Route>
          <Route path='/weather' exact component={Weather}></Route>
        </Switch>
      </Router>
    );
}

export default App;
