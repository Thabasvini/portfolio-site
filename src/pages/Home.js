import React from 'react';
import { Typography, Container, Grid, Paper, Button } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import resume from './resume.pdf';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  // Add more styles as needed
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.primary,
}));

function Home() {
  const theme = useTheme();

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.target = '_blank';
    link.download = 'YourResume.pdf';
    link.click();
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: '5rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <StyledPaper elevation={3}>
            <Title variant="h6">FRONT-END DEVELOPER</Title>
            <Typography variant="h5" sx={{ marginBottom: '0.5rem' }}>Hey! I'm Thabasvini</Typography>
            <Typography>
            I seamlessly blend artistry and technical prowess to create captivating digital 
            experiences that not only engage users but also leave a lasting impression, 
            harnessing the power of technology to make a meaningful impact. 
            Let's collaborate and bring your digital vision to life!
            </Typography>
            <DownloadButton variant="contained" onClick={handleDownloadResume}>
              Download Resume
            </DownloadButton>
          </StyledPaper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;