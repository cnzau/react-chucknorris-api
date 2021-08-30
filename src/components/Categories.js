import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryItem from './CategoryItem';

function Categories() {
  const [state, setState] = useState({
    categories: [],
    clicked: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const categories = await axios.get(
      'https://api.chucknorris.io/jokes/categories'
    );
    setState({
      ...state,
      categories: categories.data,
    });
  };

  return (
    <>
      <h2>Categories</h2>
      <div className='categories'>
        {state.categories.map((category) => {
          return <CategoryItem key={category} category={category} />;
        })}
      </div>
    </>
  );
}

export default Categories;
