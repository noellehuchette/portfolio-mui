import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

const darkMode = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#141414'
    },
    secondary: {
      main: '#D2F898'
    },
    background: {
      default: '#1F1F1F',
      paper: '#2F2F2F'
    },
    text: {
      primary: '#FBFAEE',
      secondary: '#FBFAEE'
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

export default darkMode;
