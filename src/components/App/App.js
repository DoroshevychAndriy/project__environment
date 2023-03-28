import React from 'react';
import reactDom from 'react-dom';
import Footer from '../Footer/Footer';
import Head from '../Head';
import Header from '../header/Header';

function App() {
  return (
   <>
    <div className='container'>
      <Header />
      <Head />
      <Footer />
    </div>
   </>
  );
}

export default App;
