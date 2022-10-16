import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() =>
    JSON.parse(localStorage.getItem('user'))
  );

  useEffect(() => {
    if (!currentUser) {
      return;
    }
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  const logOut = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
