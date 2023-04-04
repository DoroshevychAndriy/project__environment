import React from 'react';
import { BrowserRouter, Route, Router, Routes, useLocation, useParams } from 'react-router-dom';
import AboutUsComp from '../AboutUs__comp/AboutUs';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';
import Head from '../Head';
import Header from '../header/Header';
import Media from '../Media/Media';
import WhatWeDoComp from '../WhatWeDo__comp/WhatWeDoComp';
import ContactUs from '../ContactUs/ContactUs';
import Donations from '../Donation__comp/Donations';
import ReadProject from '../ReadProject/ReadProject';
import BlogPost from '../BlogPost/BlogPost';
import EventRead from '../EventRead/EventRead';

function App() {
  return (
    <div>
    <Header />
      <Routes>
        <Route exact path="project__environment" element={<Head />} />
        <Route path="/about" element={<AboutUsComp />} />
        <Route path="/whatwedo" element={<WhatWeDoComp />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/donation" element={<Donations />} />
        <Route path="/projects" element={<ReadProject />} />
        <Route path="/blog_post" element={<BlogPost />} />
        <Route path="/events" element={<EventRead />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>   
  );
}

export default App;
