import React, { createContext, useState, ReactNode } from 'react';

interface NavContextType {
  activeLinkId: string;
  setActiveLinkId: (id: string) => void;
}

// Providing default values
export const NavContext = createContext<NavContextType>({
  activeLinkId: '',
  setActiveLinkId: () => {}, // Dummy function
});

interface NavProviderProps {
  children: ReactNode;
}

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
