import React, { useEffect, useRef } from 'react';
import { Typography, Container, Grid, Button, ThemeProvider, createTheme } from '@mui/material';
import { styled } from '@mui/system';
import lottie from 'lottie-web';
import resume from './resume.pdf';
import animation from '../static/homepage.json';

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.primary,
}));

const AnimationContainer = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '100%',
  margin: '0 auto',
  [theme.breakpoints.up('sm')]: {
    float: 'right',
    marginLeft: theme.spacing(2),
  },
}));

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

function Home() {
  const animationContainer = useRef(null);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.target = '_blank';
    link.download = 'YourResume.pdf';
    link.click();
  };

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animation,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ marginTop: '8rem' }} style={{textAlign: 'justify'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Title variant="h6">FRONT-END DEVELOPER</Title>
            <Typography variant="h5" style ={{color: theme.palette.text.primary}} sx={{ marginBottom: '0.5rem' }}>Hey! I'm Thabasvini</Typography>
            <Typography style ={{color: theme.palette.text.primary}}>
              I seamlessly blend artistry and technical prowess to create captivating digital 
              experiences that not only engage users but also leave a lasting impression, 
              harnessing the power of technology to make a meaningful impact. 
              Let's collaborate and bring your digital vision to life!
            </Typography>
            <DownloadButton variant="contained" onClick={handleDownloadResume}>
              Download Resume
            </DownloadButton>
          </Grid>
          <Grid item xs={12} sm={6}>
            <AnimationContainer ref={animationContainer} />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Home;