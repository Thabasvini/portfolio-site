import React from 'react';
import { Typography, Container, Grid, Button, ThemeProvider, createTheme } from '@mui/material';
import { styled } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A148C',
    },
    secondary: {
      main: '#6A1B9A',
    },
    background: {
      default: '#1A1B36',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
});

const StyledImage = styled('img')({
  width: '100%',
  borderRadius: '8px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  objectFit: 'cover',
  maxHeight: '200px',
  transition: 'opacity 0.3s ease',
  '&:hover': {
    opacity: 0.7,
  },
});

const ProjectTitle = styled(Typography)({
  marginTop: '16px',
  fontWeight: 'bold',
});

const ProjectDescription = styled(Typography)({
  marginBottom: '16px',
});

const HighlightList = styled('ul')({
  color: theme.palette.text.primary,
  marginLeft: '16px',
});

const HighlightItem = styled('li')({
  marginBottom: '8px',
});

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Music Player',
      screenshot: 'music.jpg',
      demoLink: 'https://music-player-tvini.netlify.app',
      description: 'The Music Player project is a web application developed using React and Material-UI. It allows users to browse and play music from various playlists using the Spotify Web API. The application features an intuitive user interface with album cover display, playback controls (play, pause, stop, skip), volume control, and a slider to navigate through the track. Additionally, users can select different playlists and listen to tracks from their favorite artists or genres.',
      technologies: ['React', 'Material-UI', 'Axios', 'Spotify Web API'],
      highlights: [
        'Implemented Spotify authentication to fetch access tokens and utilize the Spotify Web API.',
        'Integrated audio playback functionality with features like play, pause, stop, and skip.',
        'Enabled volume control and mute functionality for a customizable listening experience.',
        'Utilized Material-UI components and styled-components for responsive and visually appealing UI.',
        'Incorporated slider components to display and navigate the current track\'s playback progress.',
        'Implemented playlist selection functionality, allowing users to switch between different playlists.',
      ],
    },
    // Add more projects as needed
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Typography variant="h4" color="primary" style={{ marginTop: theme.spacing(15),}}gutterBottom>Featured Side Project</Typography>
        <Grid container spacing={3} textAlign={'justify'}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
              <StyledImage src={project.screenshot} alt={project.title} />
              <ProjectTitle variant="h5" color="primary">{project.title}</ProjectTitle>
              <ProjectDescription variant="body1" color="textPrimary">{project.description}</ProjectDescription>
              <Typography variant="subtitle1" color="textPrimary" gutterBottom>Technologies Used: {project.technologies.join(', ')}</Typography>
              <Typography variant="subtitle1" color="textPrimary" gutterBottom>Highlights:</Typography>
              <HighlightList>
                {project.highlights.map((highlight, index) => (
                  <HighlightItem key={index}>{highlight}</HighlightItem>
                ))}
              </HighlightList>
              <Button variant="contained" color="primary" href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default ProjectsPage; 