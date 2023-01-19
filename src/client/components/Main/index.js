import React from 'react';
import { Box, Container, Typography, Avatar, Divider } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { GitHub, OpenInBrowser, School, Code, Work } from '@mui/icons-material';
import projects from './projects';
import { education, technologies } from './about';
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
        <Divider />
        <Box
          id="home"
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
            <Box
              sx={{
                p: 1,
                width: '85%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Typography variant="h4">Noelle Huchette</Typography>
              <Divider>
                <Typography variant="subtitle" sx={{ fontFamily: 'monospace' }}>
                  (they/them)
                </Typography>
              </Divider>
              <Typography variant="caption">
                Full Stack Developer, Software Engineer
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
        <Box
          id="about"
          sx={{ m: 1, p: 1, gap: 2, display: 'flex', flexDirection: 'column' }}
        >
          <Box>
            <Divider>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                <School />
                <Typography sx={{}} variant="h5" fontWeight={'bold'}>
                  Education
                </Typography>
              </Box>
            </Divider>
            {education.map((edu, eidx) => {
              return (
                <Box sx={{ m: 1, gap: 1 }} key={`${edu.school}`}>
                  <Typography variant="h6">{edu.school}</Typography>
                  <Typography variant="subtitle1">{edu.degree}</Typography>
                  <Typography variant="subtitle2">{edu.graduation}</Typography>
                </Box>
              );
            })}
          </Box>
          <Box>
            <Divider>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                <Code />
                <Typography fontWeight={'bold'} variant="h5">
                  Technologies
                </Typography>
              </Box>
            </Divider>
            {Object.keys(technologies).map((key, kidx) => {
              return (
                <Box key={key} sx={{ m: 1 }}>
                  <Typography variant="h6" fontStyle={'italic'}>
                    {key[0].toUpperCase() + key.slice(1)}:
                  </Typography>
                  {technologies[key].map((tech, tidx) => {
                    return (
                      <span key={tech}>
                        {tidx ? ', ' : ''}
                        {tech}
                      </span>
                    );
                  })}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ p: 1, gap: 1, m: 1 }} id="projects">
          <Divider>
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Work />
              <Typography sx={{ m: 1 }} variant="h5" fontWeight={'bold'}>
                Projects
              </Typography>
            </Box>
          </Divider>
          <Carousel
            animation="slide"
            interval={5000}
            duration={400}
            sx={{ height: 1, cursor: 'pointer' }}
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
                  fontStyle={'oblique'}
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
        <Box id="contact">
          <Contact />
        </Box>
        <Divider />
      </Container>
    </Box>
  );
};

export default Main;
