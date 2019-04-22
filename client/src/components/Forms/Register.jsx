import React, {Component} from 'react'
import {register} from '../../functions/UserFunctions'
import FormValidator from './../../functions/formValidator';

class Register extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator([
      {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'Email is required',
      },
      {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'That is not valid email',
      },
      {
        field: 'first_name',
        method: 'isEmpty',
        validWhen: false,
        message: 'First name is required',
      },
      {
        field: 'first_name',
        method: 'isByteLength',
        args: [{min: 4}],
        validWhen: true,
        message: 'In first name minimum 4 symbols',
      },
      {
        field: 'first_name',
        method: 'isByteLength',
        args: [{max: 20}],
        validWhen: true,
        message: 'In first name maximum 20 symbols',
      },
      {
        field: 'last_name',
        method: 'isEmpty',
        validWhen: false,
        message: 'Last name is required',
      },
      {
        field: 'last_name',
        method: 'isByteLength',
        args: [{min: 4}],
        validWhen: true,
        message: 'In last name minimum 4 symbols',
      },
      {
        field: 'last_name',
        method: 'isByteLength',
        args: [{max: 20}],
        validWhen: true,
        message: 'In last name maximum 20 symbols',
      },
      {
        field: 'password',
        method: 'isEmpty',
        validWhen: false,
        message: 'Password is required',
      },
      {
        field: 'password',
        method: 'isByteLength',
        args: [{min: 4}],
        validWhen: true,
        message: 'In password minimum 4 symbols',
      },
      {
        field: 'password',
        method: 'isByteLength',
        args: [{max: 60}],
        validWhen: true,
        message: 'In password maximum 60 symbols',
      },
    ]);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      validation: this.validator.valid(),
    };

    this.submitted = false;
  }

  handleInput = (event) => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let {first_name, last_name, email, password} = this.state;

    const validation = this.validator.validate(this.state);
    this.setState({validation});
    this.submitted = true;

    if (validation.isValid) {
      register({
        first_name,
        last_name,
        email,
        password
      })
        .then((res) => {
          if (res.status === 'success') {
            localStorage.usertoken = res.token;
            this.props.history.push(`/dashboard`);
          } else {
            alert(res.info);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    let validation = this.submitted ?
      this.validator.validate(this.state) :
      this.state.validation;

    return (
      <form className="form" noValidate onSubmit={this.handleSubmit}>
        <h1 className="form__title">Sign in</h1>
        <p className="form__description">on ToDo list for Ruby Garage</p>
        <div className="form__group">
          <div className={validation.first_name.isInvalid ? 'input error' : 'input'}
               data-error={validation.first_name.message}>
            <input type="text" name="first_name" className="input__field" placeholder="First name" required
                   onInput={this.handleInput}/>
            <label className="input__label">First name</label>
          </div>
        </div>
        <div className="form__group">
          <div className={validation.last_name.isInvalid ? 'input error' : 'input'}
               data-error={validation.last_name.message}>
            <input type="text" name="last_name" className="input__field" placeholder="Last name" required
                   onInput={this.handleInput}/>
            <label className="input__label">Last name</label>
          </div>
        </div>
        <div className="form__group">
          <div className={validation.email.isInvalid ? 'input error' : 'input'} data-error={validation.email.message}>
            <input type="email" name="email" className="input__field" placeholder="Email" required
                   onInput={this.handleInput}/>
            <label className="input__label">Email</label>
          </div>
        </div>
        <div className="form__group">
          <div className={validation.password.isInvalid ? 'input error' : 'input'}
               data-error={validation.password.message}>
            <input type="password" name="password" className="input__field" placeholder="Password" required
                   onInput={this.handleInput}/>
            <label className="input__label">Password</label>
          </div>
        </div>
        <button className="btn color-btn">Sign in</button>
      </form>
    )
  }
}

export default Register;
