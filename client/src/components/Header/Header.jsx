import React, { Component } from 'react'
import { Link, withRouter, Route } from 'react-router-dom'

import './styles/_header.scss';

function HeaderLink({label, to, exact}) {
  return (
    <Route
      path={to}
      exact={exact}
      children={({match}) => {
        return (
          <li className="nav__item">
            <Link to={to} className={match ? 'nav__link entered' : 'nav__link'}>{label}</Link>
          </li>
        );
      }}
    />
  );
}

class Header extends Component {
  constructor(props) {
    super(props);

    this.setState({
      logLinks: [
        {
          to: '/',
          title: 'Home',
          exact: true,
        },
        {
          to: '/login/',
          title: 'Login',
          exact: false,
        },
        {
          to: '/register/',
          title: 'Register',
          exact: false,
        },
      ],
      regLinks: [
        {
          to: '/',
          title: 'Home',
          exact: true,
        },
        {
          to: '/dashboard/',
          title: 'Dashboard',
          exact: false,
        },
        {
          to: '/profile/',
          title: 'Profile',
          exact: false,
        },
      ]
    });
  }


  logOut(e) {
    e.preventDefault();
    localStorage.removeItem('usertoken');
    this.props.history.push(`/`);
  }

  render() {
    const loginRegLink = (
      <React.Fragment>
        <Route exact={false} children={({ match }) => (
          <li className="nav__item">{console.log(match)}
            <Link to="/login" className={ match ? "nav__link entered" : "nav__link"}>Login</Link>
          </li>
          )}/>
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
              <li className="nav__item">
                <Link to="/" className="nav__link">Home</Link>
              </li>
              {localStorage.usertoken ? userLink : loginRegLink}
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default withRouter(Header)
