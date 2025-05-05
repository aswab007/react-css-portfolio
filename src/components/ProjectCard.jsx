import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
});

export default function ProjectCard({ title, description, link }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={link}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
