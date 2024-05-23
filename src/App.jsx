import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../src/assets/components/Navbar/Navbar'

import Home from '../src/assets/components/Homepage/Home';
import Books from '../src/assets/components/Books/Books';
import Blog from '../src/assets/components/Blog/Blog';
import About from '../src/assets/components/About/About';
import Footer from './assets/components/Footer/Footer';

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
