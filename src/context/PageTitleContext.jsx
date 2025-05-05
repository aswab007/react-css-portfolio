import { createContext, useState } from 'react';

export const PageTitleContext = createContext();

export function PageTitleProvider({ children }) {
  const [title, setTitle] = useState('Home');

  return (
    <PageTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
}
