import { AuthContext } from 'AuthContext/AuthContext';
import { Layout } from 'components/Layout/Layout';
import { Modal } from 'components/Modal/Modal';
import { Auth } from 'pages/Auth';
import { Gallery } from 'pages/Gallery';
import { Home } from 'pages/Home';
import { useContext, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

export const Router = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('gallery');
    } else {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="gallery" element={<Gallery />}>
          <Route path=":id/modal" element={<Modal />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};
