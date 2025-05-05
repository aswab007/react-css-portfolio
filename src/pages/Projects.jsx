import React from 'react';
import { Box, Card, CardContent, Typography, Grid, IconButton } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Projects() {
  const projects = [
    {
      title: "Vector Class in C++",
      link: "https://github.com/aswab007/Vector",
      icon: <CodeIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
    },
    {
      title: "Binary Searching",
      link: "https://github.com/aswab007/Binary-Searching",
      icon: <CodeIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
    },
    {
      title: "Linked List in C++",
      link: "https://github.com/aswab007/Link_List",
      icon: <CodeIcon sx={{ fontSize: 40, color: '#FF9800' }} />, // Orange tone
    }
  ];

  return (
    <Box sx={{ paddingTop: '50px', textAlign: 'center' }}>
      <Typography variant="h3" sx={{ marginBottom: '30px', color: 'white' }}>
        Projects
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                background: 'linear-gradient(135deg, #2c3e50, #34495e)',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                borderRadius: '15px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              <CardContent sx={{ padding: '20px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                  {project.icon}
                </Box>
                <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#ddd', marginBottom: '15px' }}>
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <IconButton
                    href={project.link}
                    target="_blank"
                    sx={{ color: '#fff', fontSize: '30px' }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
