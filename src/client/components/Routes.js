import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import Nav from './Nav';

const Router = (props) => {
  return (
    <div className="content">
      {/* <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />  
      </Routes> */}
      <Nav />
      <Main />
      {/* <Footer /> */}
    </div>
  );
};

export default Router;
