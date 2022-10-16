import { AuthContext } from 'AuthContext/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export const Navigator = () => {
  const { currentUser, logOut } = useContext(AuthContext);

  return (
    <nav>
      <ul style={{ display: 'flex', gap: '20px' }}>
        <Link to="home">Home</Link>
        {currentUser ? (
          <>
            <Link to="gallery">Gallery</Link>{' '}
            <button type="button" onClick={logOut}>
              Log out
            </button>
          </>
        ) : (
          <Link to="auth">Auth</Link>
        )}
      </ul>
    </nav>
  );
};
