import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const Gallery = () => {
  const [images, setimages] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(
      'https://pixabay.com/api/?key=24752012-6c87264ae8b83647fd23322b3&q=yellow+flowers&image_type=photo&pretty=true'
    )
      .then(data => data.json())
      .then(images => setimages(images.hits));
  }, []);

  return (
    <>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100vw',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {images.map(item => {
          return (
            <li key={item.id}>
              <Link
                to={`${item.id}/modal`}
                state={{ images, from: location.pathname }}
              >
                <img src={item.webformatURL} alt="alt" width="300" />
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
};
