import React from 'react';
import { Box, Card, IconButton, Typography } from '@mui/material';
import { LinkedIn, GitHub, Article } from '@mui/icons-material';
import './style.css';
import { textAlign } from '@mui/system';

const Footer = () => {
  const onDownload = () => {
    const link = document.createElement('a');
    link.download = `NoelleHuchetteResume.pdf`;
    link.href = `./NoelleHuchetteResume.pdf`;
    link.click();
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '0',
        width: '100%',
        zIndex: '1000'
      }}
    >
      <Card
        sx={{
          display: 'flex',
          width: '100%',
          textAlign: 'center',
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}
      >
        <IconButton
          sx={{ p: 0, gap: 0.5 }}
          aria-label="LinkedIn"
          onClick={() =>
            window.open('https://www.linkedin.com/in/noelle-huchette/')
          }
          color="inherit"
        >
          <LinkedIn sx={{ fontSize: '1.5rem' }} />
          <Typography variant="subtitle2" sx={{ fontFamily: 'monospace' }}>
            LinkedIn
          </Typography>
        </IconButton>
        <IconButton
          sx={{ p: 0, gap: 0.5 }}
          aria-label="GitHub"
          onClick={() => window.open('https://github.com/noellehuchette')}
          color="inherit"
        >
          <GitHub sx={{ fontSize: '1.5rem' }} />

          <Typography variant="subtitle2" sx={{ fontFamily: 'monospace' }}>
            Github
          </Typography>
        </IconButton>
        <IconButton
          sx={{ p: 0, gap: 0.5 }}
          aria-label="Resume"
          onClick={onDownload}
          color="inherit"
        >
          <Article sx={{ fontSize: '1.5rem' }} />

          <Typography variant="subtitle2" sx={{ fontFamily: 'monospace' }}>
            Resume
          </Typography>
        </IconButton>
      </Card>
    </Box>
  );
};

export default Footer;
