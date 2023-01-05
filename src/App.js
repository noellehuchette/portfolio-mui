import React from 'react';
import './App.css';
import Nav from './client/components/Nav/index';
import Routes from './client/components/Routes';
import Footer from './client/components/Footer';
function App() {
  return (
    <div className="App">
      <main>
        {/* <Nav /> */}
        <Routes />
        {/* <Footer /> */}
      </main>
    </div>
  );
}

export default App;
