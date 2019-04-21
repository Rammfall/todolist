import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Components

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Landing from './components/Landing.jsx';
import Login from './components/Forms/Login.jsx';
import Register from './components/Forms/Register.jsx';
import Profile from './components/Profile.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

// CSS imports

import './styles/_reset.scss';
import './styles/_general.scss';
import './styles/_content.scss';
import './styles/_forms.scss';

class App extends Component {
  render () {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route exact path="/" component={Landing} />
          <main className="content">
            <div className="container content__container">
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={Profile} />
              <Route path="/dashboard" component={Dashboard} />
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
