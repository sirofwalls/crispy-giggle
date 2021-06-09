import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Blog from './pages/Blog';
import BlogArticle from './components/BlogArticle/BlogArticle';

function App() {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/blog' component={Blog} exact />
        <Route path='/blog/:id' component={BlogArticle} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
