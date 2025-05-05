import React from 'react';
import { Box, Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EngineeringIcon from '@mui/icons-material/Engineering';

export default function Education() {
  const educationData = [
    {
      degree: "BSAI",
      institution: "ITU",
      year: "2027",
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
      backgroundImage: "https://source.unsplash.com/200x200/?university",
    },
    {
      degree: "ICS",
      institution: "KIPS",
      year: "2023",
      icon: <EngineeringIcon sx={{ fontSize: 40, color: '#1976D2' }} />,
      backgroundImage: "https://source.unsplash.com/200x200/?college",
    }
  ];

  return (
    <Box sx={{ paddingTop: '50px', textAlign: 'center' }}>
      <Typography variant="h3" sx={{ marginBottom: '30px', color: 'white' }}>
        Education
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {educationData.map((entry, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                background: `url(${entry.backgroundImage}) no-repeat center center`,
                backgroundSize: 'cover',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                }
              }}
            >
              <CardContent sx={{ padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '15px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                  {entry.icon}
                </Box>
                <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
                  {entry.degree}
                </Typography>
                <Typography variant="h6" sx={{ color: '#ddd' }}>
                  {entry.institution}
                </Typography>
                <Typography variant="body2" sx={{ color: '#bbb', marginTop: '10px' }}>
                  Expected Graduation: {entry.year}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
