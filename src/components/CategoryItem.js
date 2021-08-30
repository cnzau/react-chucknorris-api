import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ category }) => {
  return (
    <Link to={`random?category=${category}`} className='category-item'>
      {category}
    </Link>
  );
};

export default CategoryItem;
