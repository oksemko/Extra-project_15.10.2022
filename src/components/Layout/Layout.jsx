import { Navigator } from 'components/Navigator/Navigator';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Navigator />
      <Outlet />
    </>
  );
};
