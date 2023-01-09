import * as React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

const lightMode = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#5C5C5C'
    },
    secondary: {
      main: '#F6F930'
    },
    background: {
      default: '#FCFCFC',
      paper: '#EEFCD9'
    },
    text: {
      primary: '#161315',
      secondary: '#211C1F'
    },
    error: {
      main: '#F44336'
    },
    warning: {
      main: '#FF9800'
    },
    success: {
      main: '#4CAF50'
    }
  }
});

export default lightMode;
