import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Chuck from './chuck.png';
import Categories from './components/Categories';
import Joke from './components/Joke';

import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Chuck Norris Jokes</h1>
      <div className='main'>
        <div className='row'>
          <img src={Chuck} alt='' />
          <Categories />
        </div>
        <Switch>
          {['/', '/random', '/random/'].map((path) => (
            <Route
              key={path}
              strict
              path={path}
              render={(props) => <Joke key={props.location.key} />}
            />
          ))}
        </Switch>
      </div>
    </div>
  );
}

export default App;
