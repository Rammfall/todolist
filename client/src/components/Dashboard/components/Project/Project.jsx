import React, {Component} from 'react';
import Tasks from '../Task/Tasks.jsx';
import { dropProject, editProject } from './../../functions/connectDB';
import FormValidator from './../../../../functions/formValidator';

import './styles/_project.scss';
import './styles/_modal.scss';

class Project extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator([
      {
        field: 'name',
        method: 'isEmpty',
        validWhen: false,
        message: 'Name project is required',
      },
      {
        field: 'name',
        method: 'isByteLength',
        args: [{min: 4}],
        validWhen: true,
        message: 'Name project should have minimum 4 symbols',
      },
      {
        field: 'name',
        method: 'isByteLength',
        args: [{max: 30}],
        validWhen: true,
        message: 'Name project should have maximum 30 symbols',
      },
    ]);

    this.state = {
      isAlive: true,
      id: this.props.data.id,
      visibleEditModal: false,
      name: this.props.data.name,
      validation: this.validator.valid(),
    };

    this.submitted = false;

    this.clickDelete = this.clickDelete.bind(this);
  }

  handleInput = (event) => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let {name, id} = this.state;

    const validation = this.validator.validate(this.state);
    this.setState({validation});
    this.submitted = true;

    if (validation.isValid) {
      editProject({
        name,
        id: `${id}`,
      })
        .then((res) => {
          this.setState({
            name: this.state.name,
            visibleEditModal: false,
          });
        })
        .catch(error => console.log(error));
    }
  };

  clickDelete() {
    dropProject({id: `${this.state.id}`})
      .then(() => {

        this.setState({isAlive: false});
      })
      .catch(error => console.log(error));
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
    const {id, name} = this.state;
    let validation = this.submitted ?
      this.validator.validate(this.state) :
      this.state.validation;

    return this.state.isAlive ? (
      <li className="project">
        <div className="project__header">
          <h2 className="project__title">{name}</h2>
          <button className="btn" onClick={this.handlerEdit}>Edit project</button>
          <button className="btn btn-danger" onClick={this.clickDelete}>Delete project</button>
        </div>
        {this.state.visibleEditModal === true ? (
          <div className="modal" onClick={this.handlerCloseModal}>
            <form className="modal__container" noValidate onSubmit={this.handleSubmit}>
              <p className="title modal__title">Edit <span className="modal__color">{name}</span></p>
              <div className={validation.name.isInvalid ? 'input error modal__input' : 'input modal__input'} data-error={validation.name.message}>
                <input type="text" name="name" onInput={this.handleInput} required placeholder="Enter new name" className="input__field"/>
                <label className="input__label">Enter new name</label>
              </div>
              <button className="btn btn-color">Save</button>
            </form>
          </div>
        ) : (null)}
        <Tasks projectId={id}/>
      </li>
    ) : null;
  }
}

export default Project;
