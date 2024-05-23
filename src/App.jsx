import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar/Navbar'

import Home from '../src/components/Homepage/Home';
import Books from '../src/components/Books/Books';
import Blog from '../src/components/Blog/Blog';
import About from '../src/components/About/About';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
