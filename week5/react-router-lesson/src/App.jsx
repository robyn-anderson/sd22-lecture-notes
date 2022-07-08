import React, { useState } from 'react'
import{ BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom' // 'borwserRouter as Router' just renames browserRouter to Router so the name is not as long
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import NotFound from './components/NotFound';

/*
  React Router 
    * React Router creates the illusion of multiple pages within an application 
    * Routing refers to navigating to different pages in an app that have their own URL 

  Routes are endpoints
  Routes specify which component is going to be displayed/rendered
  There can also be subroutes
    * For apple.com/ipad/compare - ipad is the route, compare is the subroute

  * 1. Install react router DOM [npm i react-router-dom@6 ] (the 6 is for version 6)
  * 2. import BrowserRouter and Routes and Route and Link from 'react-router-dom'
      * BrowserRouter is a wrapper encompassing all components in a routing system
      * Routes (formerly Switch v5 and below) - declare where each dynamic component will belong
      * Route
          *  an individual route specifying the component to be rendered when hit
  
*/

function App() {
  
  return (
    <Router> {/* Used to be called 'switch' */}
      <nav>
        <Link to='/'>Home</Link> {/* Links will refresh the page, routes will not so best to not use this because it goes against the whole purpose of react */}
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Routes>
        <Route path='*' element={ <NotFound /> } /> {/* Use wildcard (*) to assign a route for everything that is not explicitly assigned */}
        <Route path='/' element={ <Home /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/about' element={ <AboutMe /> } >
          <Route path=':username' element={ <AboutMe /> } />
        </Route>
        {/* Below is an example of having an "empty" route (pages-on-site) purely for organizational purposes - it has no content - so other "real" routes can be organized within it */}
        <Route path='/pages-on-site'>
          <Route path='subroute1' element={ <NotFound /> } />
          <Route path='subroute2' element={ <NotFound /> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
