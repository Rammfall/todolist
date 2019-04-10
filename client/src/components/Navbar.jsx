import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends Component {
  logOut(e) {
    e.preventDefault();

    localStorage.removeItem('usertoken');
    this.props.history.push('/');
  }

  render() {
    const loginRegLink = (
      <ul className="nav">
        <li className="nav__item">
          <Link to="/login" className="nav__link">
            Login
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/register" className="nav__link">
            Register
          </Link>
        </li>
      </ul>
    );

    const userLink = (
      <ul className="nav">
        <li className="nav__item">
          <Link to="/profile" className="nav__link">
            User
          </Link>
        </li>
        <li className="nav__item">
          <a href="/" onClick={this.logOut.bind(this)} className="nav__link">
            Logout
          </a>
        </li>
      </ul>
    );

    return (
      <nav>
        <button className="nav__toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar1"
        aria-controls="navbar1"
        aria-expanded="false"
        aria-label="toggle navigation">
          <span className="nav__toggler-icon">

          </span>
        </button>
      </nav>
    );
  }
}
