import React, {Component} from 'react';
import { dropTask, editTask, putTask } from './../../functions/connectDB';
import FormValidator from '../../../../functions/formValidator';

class Task extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator([
      {
        field: 'name',
        method: 'isEmpty',
        validWhen: false,
        message: 'Task name is required',
      },
      {
        field: 'name',
        method: 'isByteLength',
        args: [{min: 4}],
        validWhen: true,
        message: 'Task name should have minimum 4 symbols',
      },
      {
        field: 'name',
        method: 'isByteLength',
        args: [{max: 30}],
        validWhen: true,
        message: 'Task name should have maximum 60 symbols',
      },
      {
        field: 'deadline',
        method: 'isEmpty',
        validWhen: false,
        message: 'Deadline is required',
      },
    ]);

    this.state = {
      data: this.props.data,
      isAlive: true,
      name: this.props.data.name,
      id: this.props.data.id,
      status: this.props.data.status,
      deadline: this.props.data.deadline,
      validation: this.validator.valid(),
    };

    console.log(this.state);

    this.submitted = false;
    this.clickDelete = this.clickDelete.bind(this);
  }

  clickDelete () {
    dropTask({id: `${this.state.data.id}`})
      .then(() => {
        this.setState({isAlive: false})
      })
      .catch();
  }

  handlerInput = (event) => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handlerSubmit = (event) => {
    event.preventDefault();

    let {name, deadline} = this.state;
    console.log(this.state);

    const validation = this.validator.validate(this.state);
    this.setState({validation});
    this.submitted = true;

    if (validation.isValid) {
      editTask({
        name,
        deadline,
        id: `${this.state.id}`,
        status: `${this.state.status ? 0: 1}`,
      })
        .then((res) => {
          let date = new Date(res.info.deadline).toLocaleString('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          });

          this.setState({
            visibleEditModal: !this.state.visibleEditModal,
          });
        })
        .catch(error => console.log(error));
    }
  };

  handlerEdit = () => {
    this.setState({
      visibleEditModal: !this.state.visibleEditModal,
    })
  };

  handlerCloseModal = (event) => {
    if (event.target.classList.contains('modal')) {
      this.setState({
        visibleEditModal: !this.state.visibleEditModal,
        name: this.props.data.name,
      })
    }
  };

  render() {
    const {name, deadline} = this.state;
    let validation = this.submitted ?
      this.validator.validate(this.state) :
      this.state.validation;

    return (
      this.state.isAlive ? (
      <li className="task">
        <h4 className="task__title">{name}</h4>
        <div className="task__date">{deadline}</div>
        <button className="btn btn-color" onClick={this.handlerEdit}>Edit task</button>
        <button className="btn btn-danger" onClick={this.clickDelete}>Delete task</button>
        {this.state.visibleEditModal === true ? (
          <div className="modal" onClick={this.handlerCloseModal}>
            <form className="modal__container" noValidate onSubmit={this.handlerSubmit}>
              <p className="title modal__title">Edit <span className="modal__color">{name}</span></p>
              <div className={validation.name.isInvalid ? 'input error modal__input' : 'input modal__input'} data-error={validation.name.message}>
                <input type="text" name="name" onInput={this.handlerInput} required placeholder="Enter new name" className="input__field"/>
                <label className="input__label">Enter new name</label>
              </div>
              <div className={validation.deadline.isInvalid ? 'input error modal__input' : 'input modal__input'} data-error={validation.deadline.message}>
                <input type="date" name="deadline" onInput={this.handlerInput} required placeholder="Enter new name" className="input__field"/>
                <label className="input__label">Deadline</label>
              </div>
              <button className="btn btn-color">Save</button>
            </form>
          </div>
        ) : (null)}
      </li>
      ) : ''
    );
  }
}

export default Task;
