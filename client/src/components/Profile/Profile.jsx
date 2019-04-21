import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

import './styles/_profile.scss';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: ''
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    console.log(1);
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    });
  }

  render() {
    return (
      <div className="profile">
        <h1 className="title profile__title">Your Profile</h1>
        <dl className="profile__list">
          <dt className="profile__term">First name: </dt>
          <dd className="profile__description">{this.state.first_name}</dd>
          <dt className="profile__term">Last name: </dt>
          <dd className="profile__description">{this.state.last_name}</dd>
          <dt className="profile__term">Email: </dt>
          <dd className="profile__description">{this.state.email}</dd>
        </dl>
      </div>
    )
  }
}

export default Profile;
