import React, { useContext } from 'react';
import { PageTitleContext } from '../context/PageTitleContext';
import { Box } from '@mui/material';

export default function MainSection({ children }) {
  const { title } = useContext(PageTitleContext);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <h1>{title}</h1>
      {children}
    </Box>
  );
}
