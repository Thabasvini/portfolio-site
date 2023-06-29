import React from 'react';
import { Typography, styled,createTheme } from '@mui/material';

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

const Container = styled('div')(({ theme }) => ({
  maxWidth: '800px',
  margin: '0 auto',
  padding: theme.spacing(3),
  color: theme.palette.text.primary,
  textAlign: 'justify',
}));

const SkillsContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const SkillItem = styled('div')(({ theme }) => ({
  display: 'inline-block',
  margin: theme.spacing(1),
  padding: theme.spacing(1.5),
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
}));

const SectionTitle = styled('h3')(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
}));

const About = () => {
  const highestQualification = 'Master of Technology in Information Technology';
 

  const skills = [
    'Artificial Intelligence',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Sass',
    'Bootstrap',
    'jQuery',
    'Linux',
    'JSON',
    'Figma',
    'Git',
    'UI/UX Design',
    'Web Architecture',
    'GitHub',
    'ES6',
    'Material-UI',
    'Web3.js',
    'React.js',
    'Netlify',
  ];

  const experience = [
    { role: 'Front-end Developer', years: '4+' },
    { role: 'Founder', years: '3' },
  ];

  const achievements = [
    'Increased website performance by 40% through optimizing code, improving load times, and enhancing overall user experience',
    'Successfully resolved critical issues, reducing website downtime by 50% and ensuring uninterrupted user access',
    'Mentored junior developers, fostering their professional growth and development, with 90% of mentees reporting increased skills and confidence',
    'Implemented responsive design principles, resulting in a 30% increase in mobile traffic and improved mobile user engagement',
  ];

  return (
    <Container>
      <Typography variant="h4" style={{marginTop: theme.spacing(12),color: theme.palette.primary.main }} gutterBottom>About Me</Typography>
      <Typography variant="body1" component="div">
  Hi there, I'm Thabasvini, a passionate front-end developer on a mission to create captivating web experiences that inspire and engage users. With every line of code I write, I strive to bring ideas to life and make a meaningful impact through the power of technology.
</Typography>
<br />
<Typography variant="body1" component="div">
  Front-end development is not just my profession; it's my true passion. The art of transforming intricate designs into interactive and visually stunning interfaces ignites my creative spark. I am driven by the endless possibilities of the web, constantly seeking innovative ways to push boundaries and deliver seamless user experiences that leave a lasting impression.
</Typography>
<br />
<Typography variant="body1" component="div">
  With a diverse skill set spanning JavaScript, HTML5, CSS3, and a range of modern frameworks and tools, including React.js, Material-UI, and more, I am equipped with the technical expertise to turn concepts into reality. But it's not just about the technology for me – it's about understanding the human element behind every click, tap, and interaction. I strive to create intuitive and user-centric designs that evoke emotion and drive engagement.
</Typography>
<br />
<Typography variant="body1" component="div">
  Collaboration is at the heart of my approach. I thrive in dynamic team environments, working closely with designers, back-end developers, and stakeholders to transform ideas into extraordinary digital experiences. Through effective communication, attention to detail, and a solution-oriented mindset, I consistently deliver projects that exceed expectations.
</Typography>
<br />
<Typography variant="body1" component="div">
  Passion is what fuels my continuous learning and growth. I am constantly exploring new technologies, staying up to date with industry trends, and seeking out opportunities to expand my skill set. I believe in the power of curiosity and embrace challenges as opportunities for personal and professional development.
</Typography>
<br />
<Typography variant="body1" component="div">
  If you're looking for a dedicated front-end developer who is driven by passion and fueled by creativity, let's connect. Together, we can bring your ideas to life and make a meaningful impact in the digital world.
</Typography>
      <SkillsContainer>
        <SectionTitle>Skills</SectionTitle>
        {skills.map((skill) => (
          <SkillItem key={skill}>{skill}</SkillItem>
        ))}
      </SkillsContainer>
      <SectionTitle style={{color: theme.palette.primary.main}}>Highest Qualification</SectionTitle>
      <Typography variant="body1" component="div">{highestQualification}</Typography>
      <SectionTitle style={{color: theme.palette.primary.main}}>Experience</SectionTitle>
{experience.map(({ role, years }, index) => (
  <Typography variant="body1" component="div" key={index}>
    {`${role}: ${years} years of experience`}
  </Typography>
  
))}
<SectionTitle style={{color: theme.palette.primary.main}}>Achievements</SectionTitle>
      {achievements.map((achievement, index) => (
        <Typography variant="body1" component="div" key={index}>
          - {achievement}
        </Typography>
        ))}
    </Container>
  );
};

export default About;