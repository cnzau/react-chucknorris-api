import React from 'react';
import { Route } from 'react-router-dom';
import Chuck from './chuck.png';
import Categories from './components/Categories';
import Joke from './components/Joke';

import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Chuck Norris Jokes</h1>
      <div className='main'>
        <img src={Chuck} alt='' />
        <div className='content'>
          <Categories />
          <Route
            path='/'
            render={(props) => <Joke key={props.location.key} />}
          />
        </div>
      </div>
    </div>
  );
}

export default App;