import React, {Component} from 'react'
import {register} from '../UserFunctions'

// import Modal from './Modal.jsx';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    };

    register(user).then(() => {
      this.props.history.push(`/login`)
    });
  }

  render() {
    return (
      <form className="form">
        <h1 className="form__title">Sign in</h1>
        <p className="form__description">on ToDo list for Ruby Garage</p>
        <div className="form__group">
          <div className="input" data-error="">
            <input type="text" className="input__field" placeholder="First name" required/>
            <label className="input__label">First name</label>
          </div>
        </div>
        <div className="form__group">
          <div className="input" data-error="">
            <input type="text" className="input__field" placeholder="Last name" required/>
            <label className="input__label">Last name</label>
          </div>
        </div>
        <div className="form__group">
          <div className="input" data-error="">
            <input type="email" className="input__field" placeholder="Email" required/>
            <label className="input__label">Email</label>
          </div>
        </div>
        <div className="form__group">
          <div className="input">
            <input type="password" className="input__field" placeholder="Password" required/>
            <label className="input__label">Password</label>
          </div>
        </div>
        <button className="btn color-btn">Sign in</button>
      </form>
    )
  }
}

export default Register;
