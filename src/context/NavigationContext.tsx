import React, { createContext, useContext, useState } from 'react';
import { PageId } from '../types';

interface NavigationContextType {
  currentPage: PageId;
  navigate: (page: PageId) => void;
  goBack: () => void;
}

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) throw new Error('useNavigation must be used within a NavigationProvider');
  return context;
};

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [history, setHistory] = useState<PageId[]>(['login']);

  const navigate = (page: PageId) => {
    setHistory((prev) => [...prev, page]);
  };

  const goBack = () => {
    setHistory((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  };

  const currentPage = history[history.length - 1];

  return (
    <NavigationContext.Provider value={{ currentPage, navigate, goBack }}>
      {children}
    </NavigationContext.Provider>
  );
};
