import React from 'react';
import { Typography, Container, TextField, Button, Grid, ThemeProvider, createTheme } from '@mui/material';
import { Email } from '@mui/icons-material';
import {styled} from '@mui/system'

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

const FooterContainer = styled('footer')`
  background-color: ${theme.palette.primary.main};
  color: ${theme.palette.text.primary};
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;


const GmailIcon = styled(Email)`
  margin-right: 8px;
`;

const handleGmailClick = () => {
  window.location.href = `mailto:your-email@example.com`;
};


const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/mnqyerlq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    })
      .then((response) => {
        if (response.ok) {
          // Successful form submission
          // You can display a success message or redirect the user to a thank you page
          console.log('Form submitted successfully');
          // Display a success message to the user
          alert('Thank you for your message! We will get back to you soon.');
          // Clear the form fields
          form.reset();
        } else {
          // Error in form submission
          // You can display an error message to the user
          console.log('Form submission failed');
          // Display an error message to the user
          alert('Oops! Something went wrong. Please try again later.');
        }
      })
      .catch((error) => {
        // Error in form submission
        // You can display an error message to the user
        console.log('Form submission error:', error);
        // Display an error message to the user
        alert('Oops! Something went wrong. Please try again later.');
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" style={{ marginTop: theme.spacing(13),}}>
        <Typography variant="h4" color="primary" align="center" gutterBottom>Contact Me</Typography>
        <Typography variant="body1" color="textPrimary" align="center" gutterBottom>
          Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Your Name"
                name="name"
                variant="outlined"
                color="primary"
                InputLabelProps={{
                  style: { color: theme.palette.text.primary },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                variant="outlined"
                color="primary"
                InputLabelProps={{
                  style: { color: theme.palette.text.primary },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                variant="outlined"
                color="primary"
                InputLabelProps={{
                  style: { color: theme.palette.text.primary },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      <FooterContainer>
        <GmailIcon onClick={handleGmailClick} />
        <Typography variant="body2">
          Email: <a href="mailto:thabu.chittu@gmail.com">thabu.chittu@gmail.com</a>
        </Typography>
      </FooterContainer>
    </ThemeProvider>
  );
};

export default ContactPage;