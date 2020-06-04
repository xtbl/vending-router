import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, NavLink, Route } from 'react-router-dom';
import Catalog from './Catalog';
import Food from './Food';
import Fitness from './Fitness';
import Tech from './Tech';

function App() {
  return (
    <div className="App">
      <Catalog/>
      {/* <nav className="App-nav">
        <NavLink activeClassName="active-link" to="/" >Catalog</NavLink>
        <NavLink activeClassName="active-link" to="/food" >Food</NavLink>
        <NavLink activeClassName="active-link" to="/fitness" >Fitness</NavLink>
        <NavLink activeClassName="active-link" to="/tech" >Tech</NavLink>
      </nav>

      <Switch>
        <Route exact path='/' component={Catalog}/>
        <Route exact path='/food' component={Food}/>
        <Route exact path='/fitness' component={Fitness}/>
        <Route exact path='/tech' component={Tech}/>
      </Switch> */}
    </div>
  );
}

export default App;
