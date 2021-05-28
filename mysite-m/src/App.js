import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import AboutMe from './components/Aboutme';
import Summary from './components/Summary';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/protfilo' component={Portfolio} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </Nav>
        <Home />
        <AboutMe />
        <Summary />
        <Portfolio />
        <Contact />
      </Router>  
    </div>
  );
}

export default App;
