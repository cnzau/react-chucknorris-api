import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import axios from 'axios';

function Joke({ match }) {
  const myKey = useLocation().key;

  const search = useLocation().search;
  const category = new URLSearchParams(search).get('category');

  const [state, setState] = useState({ joke: '' });

  useEffect(() => {
    fetchData();
  }, [category, myKey]);

  const fetchData = async () => {
    const url = 'https://api.chucknorris.io/jokes/random';
    const joke = await axios.get(
      category ? url + `?category=${category}` : url
    );
    setState({
      ...state,
      joke: joke.data.value,
    });
  };

  return (
    <div>
      <h2>
        {category
          ? category.charAt(0).toUpperCase() + category.slice(1)
          : 'Random'}{' '}
        Joke
      </h2>
      <blockquote>
        <p className='joke-value'>{state.joke}</p>
      </blockquote>
    </div>
  );
}

export default Joke;
