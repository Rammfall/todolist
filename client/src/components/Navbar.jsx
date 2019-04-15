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
          <Link to="/" onClick={this.logOut.bind(this)} className="nav__link">
            Logouts
          </Link>
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

        <div id="navbar1">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
