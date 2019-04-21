import React, {Component} from 'react'
import {FormErrors} from '../FormErrors.jsx';
import {login} from '../UserFunctions';
import Modal from '../Modal.jsx';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
      () => {
        this.validateField(name, value)
      })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    login(user).then(res => {
      console.log(res);
      if (res.status !== 'error') {
        localStorage.usertoken = res.token;
        this.props.history.push(`/profile`)
      }
    })
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <h1 className="form__title">Log in</h1>
        <p className="form__description">on ToDo list for Ruby Garage</p>
        <div className="form__group">
          <div className="input" data-error="">
            <input type="email" className="input__field" name="email" placeholder="Email" required onChange={this.onChange} />
            <label className="input__label">Email</label>
          </div>
        </div>
        <div className="form__group">
          <div className="input">
            <input type="password" className="input__field" name="password" placeholder="Password" required onChange={this.onChange} />
            <label className="input__label">Password</label>
          </div>
        </div>
        <button className="btn color-btn">Log in</button>
      </form>
    )
  }
}

export default Login;
