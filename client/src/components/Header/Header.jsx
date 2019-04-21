import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import './styles/_header.scss';

class Header extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem('usertoken');
    this.props.history.push(`/`);
  }

  render() {
    const loginRegLink = (
      <React.Fragment>
        <li className="nav__item">
          <Link to="/login" className="nav__link">Login</Link>
        </li>
        <li className="nav__item">
          <Link to="/register" className="nav__link">Registration</Link>
        </li>
      </React.Fragment>
    );
    const userLink = (
      <React.Fragment>
        <li className="nav__item">
          <Link to="/dashboard" className="nav__link">Dashboard</Link>
        </li>
        <li className="nav__item">
          <Link to="/profile" className="nav__link">Account</Link>
        </li>
        <li className="nav__item">
          <Link to="/logout" className="nav__link" onClick={this.logOut.bind(this)}>Log out</Link>
        </li>
      </React.Fragment>
    );

    return (
      <header className="header">
        <div className="container header__container">
          <a href="/" className="logo">React ToDo List</a>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item"><a href="/" className="nav__link">Home</a></li>
              {localStorage.usertoken ? userLink : loginRegLink}
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default withRouter(Header)
