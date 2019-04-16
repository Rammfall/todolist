import React, {Component} from 'react'
import {FormErrors} from './FormErrors.jsx';
import {login} from './UserFunctions';
import Modal from './Modal.jsx';


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
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="panel panel-default">
                <FormErrors formErrors={this.state.formErrors}/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email"
                       className="form-control"
                       name="email"
                       placeholder="Enter Email"
                       value={this.state.email}
                       onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password"
                       className="form-control"
                       name="password"
                       placeholder="Enter Password"
                       value={this.state.password}
                       onChange={this.onChange}
                />
              </div>
              <button type="submit"
                      className="btn btn-lg btn-primary btn-block" disabled={!this.state.formValid}>
                Sign in
              </button>
            </form>
            <Modal/>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
