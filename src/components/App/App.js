import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AboutUsComp from '../AboutUs__comp/AboutUs';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';
import Head from '../Head';
import Header from '../header/Header';
import Media from '../Media/Media';
import WhatWeDoComp from '../WhatWeDo__comp/WhatWeDoComp';

function App() {
  return (
    <div>
    <Header />
      <Routes>
        <Route exact path="project__environment" element={<Head />} />
        <Route path="/about" element={<AboutUsComp />} />
        <Route path="/whatwedo" element={<WhatWeDoComp />} />
        <Route path="/media" element={<Media />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>   
  );
}

export default App;
