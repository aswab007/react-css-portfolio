import React from "react"; 
import { Paper, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"; 
import SchoolIcon from "@mui/icons-material/School"; 
import EngineeringIcon from "@mui/icons-material/Engineering"; 

export default function Education() { 
  const educationData = [ 
    { 
      degree: "BSAI", 
      institution: "ITU", 
      year: "2027", 
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#2E7D32' }} />, 
    }, 
    { 
      degree: "ICS", 
      institution: "KIPS", 
      year: "2023", 
      icon: <EngineeringIcon sx={{ fontSize: 40, color: '#1976D2' }} />, 
    } 
  ]; 

  return ( 
    <Box sx={{ mt: 6 }}> {/* mt = margin top to move table down */} 
      <Typography 
        variant="h4" 
        align="center" 
        sx={{ fontWeight: 'bold', color: '#000', mb: 4 }} 
      > 
        Education 
      </Typography> 

      <TableContainer component={Paper} sx={{ boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}> 
        <Table sx={{ minWidth: 650 }} aria-label="education table"> 
          <TableHead> 
            <TableRow> 
              <TableCell sx={{ fontWeight: 'bold' }}>Icon</TableCell> 
              <TableCell sx={{ fontWeight: 'bold' }}>Degree</TableCell> 
              <TableCell sx={{ fontWeight: 'bold' }}>Institution</TableCell> 
              <TableCell sx={{ fontWeight: 'bold' }}>Year</TableCell> 
            </TableRow> 
          </TableHead> 
          <TableBody> 
            {educationData.map((edu, index) => ( 
              <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'transparent' }}> 
                <TableCell>{edu.icon}</TableCell> 
                <TableCell>{edu.degree}</TableCell> 
                <TableCell>{edu.institution}</TableCell> 
                <TableCell>{edu.year}</TableCell> 
              </TableRow> 
            ))} 
          </TableBody> 
        </Table> 
      </TableContainer> 
    </Box> 
  ); 
} 
