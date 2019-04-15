import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    console.log(token);
    const decoded = jwt_decode(token);

    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.last_name,
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Profile</h1>
        <dl>
          <dt>First name</dt>
          <dd>{ this.state.first_name }</dd>
          <dt>Last name</dt>
          <dd>{ this.state.last_name }</dd>
          <dt>email</dt>
          <dd>{ this.state.email }</dd>
        </dl>
      </div>
    );
  }
}

export default Profile;
