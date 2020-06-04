import React, { Component } from "react";
import { Switch, NavLink, Route } from 'react-router-dom';
import Food from './Food';
import Fitness from './Fitness';
import Tech from './Tech';

class Catalog extends Component {
  render() {
    return (
      <div className='Contact'>
        <h1>Catalog</h1>
      <nav className="App-nav">
        <NavLink activeClassName="active-link" to="/food" >Food</NavLink>
        <NavLink activeClassName="active-link" to="/fitness" >Fitness</NavLink>
        <NavLink activeClassName="active-link" to="/tech" >Tech</NavLink>
      </nav>

      <Switch>
        <Route exact path='/food' component={Food}/>
        <Route exact path='/fitness' component={Fitness}/>
        <Route exact path='/tech' component={Tech}/>
      </Switch>
      </div>
    );
  }
}
export default Catalog;
