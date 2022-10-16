import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

export const Modal = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const bigImageURL = location?.state?.images?.find(
    item => Number(item?.id) === Number(params?.id)
  ).largeImageURL;

  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        background: 'rgba(0,0,0, 0.5)',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={bigImageURL} alt="alt" width="1000" />
      <button
        type="button"
        onClick={() => navigate(location?.state?.from || 'gallery')}
      >
        <AiOutlineClose style={{ width: '40px', height: '40px' }} />
      </button>
    </div>
  );
};
