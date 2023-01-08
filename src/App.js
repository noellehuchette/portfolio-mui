import React from 'react';
import './App.css';
import Nav from './client/components/Nav/index';
import Main from './client/components/Main';
import Routes from './client/components/Routes';
import Footer from './client/components/Footer';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import lightMode from './client/store/settings/lightMode';
function App() {
  const theme = useSelector((state) => state.settings.theme);
  return (
    <ThemeProvider theme={theme ? theme : lightMode}>
      <CssBaseline />
      <div className="App">
        <main>
          <Nav />
          <Main />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
