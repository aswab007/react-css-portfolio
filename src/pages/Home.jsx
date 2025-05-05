import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate(); // Hook to handle navigation

  return (
    <Box
      sx={{
        height: '100vh',
        background: 'linear-gradient(135deg, #1e1e2f, #2c3e50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        color: 'white',
        padding: '0 20px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Welcome to My Space
        </Typography>
        <Typography variant="h6" sx={{ color: '#ccc', maxWidth: '600px', mb: 4 }}>
          Passionate about learning Web Development & Design
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/projects')}
          sx={{
            backgroundColor: '#4CAF50',
            '&:hover': { backgroundColor: '#43a047' },
          }}
        >
          Explore Projects
        </Button>
      </motion.div>
    </Box>
  );
}
