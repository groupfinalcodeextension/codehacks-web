import React from 'react';
import './App.css';
import Home from './views/Home'
import Navbar from './components/Navbar'
import About from './views/About'
import Documentation from './views/Documentation'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/documentation" component={Documentation} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;