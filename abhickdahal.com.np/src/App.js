import React from 'react';
import './App.css';
import Homepage from './pages/homepage';
import About from './pages/about';
import addcontent from './pages/components/addcontent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Articlepage from './pages/articlepage';
import { Navbar } from '../src/pages/navbar/navbar';
import { notfoundPage } from './pages/nofound';
import Articlelist from './pages/components/articlelist';
import 'bootstrap/dist/css/bootstrap.min.css';
import editcontent from './pages/components/editcontent';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div id="page-body">
          <Switch>
            <Route path="/" component={Homepage} exact></Route>
            <Route path="/about" component={About} exact></Route>
            <Route path="/articlelist" component={Articlelist} exact></Route>
            <Route path="/article/:_id" component={Articlepage} exact></Route>
            <Route path="/create" component={addcontent} exact></Route>
            <Route path="/edit/:_id" component={editcontent} />
            <Route component={notfoundPage}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
