import React, {Component} from 'react';
import {login} from '../../functions/UserFunctions';
import FormValidator from './../../functions/formValidator';

class Login extends Component {
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

    let {email, password} = this.state;


    const validation = this.validator.validate(this.state);
    this.setState({validation});
    this.submitted = true;

    if (validation.isValid) {
      login({email, password})
        .then(res => {
          if (res.status === 'success') {
            localStorage.usertoken = res.token;
            this.props.history.push(`/dashboard`);
            window.location.reload();
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
        <h1 className="form__title">Log in</h1>
        <p className="form__description">on ToDo list for Ruby Garage</p>
        <div className="form__group">
          <div className={validation.email.isInvalid ? 'input error' : 'input'} data-error={validation.email.message}>
            <input type="email" className="input__field" name="email" placeholder="Email" required
                   onInput={this.handleInput}/>
            <label className="input__label">Email</label>
          </div>
        </div>
        <div className="form__group">
          <div className={validation.password.isInvalid ? 'input error' : 'input'} data-error={validation.password.message}>
            <input type="password" className="input__field" name="password" placeholder="Password" required
                   onChange={this.handleInput}/>
            <label className="input__label">Password</label>
          </div>
        </div>
        <button className="btn color-btn">Log in</button>
      </form>
    )
  }
}

export default Login;
