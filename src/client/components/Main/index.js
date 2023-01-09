import React, { useRef } from 'react';
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Avatar,
  Divider,
  Paper,
  Link
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { GitHub, OpenInBrowser } from '@mui/icons-material';
import projects from './projects';
import Contact from '../Contact';
import './style.css';

const Main = () => {
  return (
    <Box
      className="main-block"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        py: 8
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          p: 1,
          '& > *': {
            p: 1
          }
        }}
      >
        <Box
          id="about"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <Avatar
            sx={{
              m: 1,
              width: '200px',
              height: '200px'
            }}
            src="./headshot.jpg"
          />{' '}
          <Box
            sx={{
              width: { xs: '100%', sm: '50%' },
              m: { xs: 1, sm: 2 },
              p: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ p: 1, width: '85%' }}>
              <Typography variant="h4">Noelle Huchette</Typography>
              <Divider />
              <Typography variant="subtitle" sx={{ fontFamily: 'monospace' }}>
                (they/them)
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" sx={{ my: 2, p: 2 }}>
            Software Engineer with a background in mechanical engineering and
            control systems. Tenacious, professional self-starter with strong
            problem solving skills and well developed organizational abilities.
            Productive relationship builder and exceptional listener with a
            growth mindset. Interested in making a positive impact through
            well-crafted technological solutions for issues large and small.
          </Typography>
        </Box>
        <Divider />
        <Box id="skills">Test</Box>
        <Divider />
        <Box sx={{ p: 1, gap: 1, m: 1 }} id="projects">
          <Typography sx={{ m: 1 }} variant="h5">
            Projects
          </Typography>
          <Carousel
            animation="slide"
            interval={5000}
            duration={400}
            sx={{ height: 1 }}
          >
            {projects.map((project, pidx) => (
              <Box
                key={project.name}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  minHeight: '250px',
                  p: 1,
                  m: 1
                }}
              >
                <Typography
                  fontWeight="bold"
                  variant="h6"
                  onClick={() => window.open(project.deployed)}
                >
                  {project.name}
                </Typography>
                <p>{project.description}</p>
                <Typography variant="body">
                  {project.tech.map((t, tidx) => (
                    <span key={`${pidx}+${tidx}`}>
                      {tidx ? ', ' : ''}
                      {t}
                    </span>
                  ))}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1
                  }}
                >
                  <OpenInBrowser
                    fontSize="large"
                    sx={{ width: '30px' }}
                    onClick={() => window.open(project.deployed)}
                  />
                  <GitHub
                    fontSize="large"
                    sx={{ width: '30px' }}
                    onClick={() => window.open(project.github)}
                  />
                </Box>
              </Box>
            ))}
          </Carousel>
        </Box>
        <Divider />
        <Box id="contact">
          <Contact />
        </Box>
      </Container>
    </Box>
  );
};

export default Main;
