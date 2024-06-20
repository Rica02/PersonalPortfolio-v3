import React, { createContext, useState } from 'react';
import { NavContextType, NavProviderProps } from '../interfaces';

// Providing default values
export const NavContext = createContext<NavContextType>({
  activeLinkId: '',
  setActiveLinkId: () => {}, // Dummy function
});

export const NavProvider: React.FC<NavProviderProps> = ({ children }) => {
  const [activeLinkId, setActiveLinkId] = useState<string>('home');

  const providerValue = {
    activeLinkId,
    setActiveLinkId,
  };

  return (
    <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
  );
};
