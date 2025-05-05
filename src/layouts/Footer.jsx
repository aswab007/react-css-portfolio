import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, width: '100%', textAlign: 'center', padding: 1, backgroundColor: '#1976d2' }}>
      <Typography variant="body2" color="white">
        © {new Date().getFullYear()} My Portfolio
      </Typography>
    </Box>
  );
}
