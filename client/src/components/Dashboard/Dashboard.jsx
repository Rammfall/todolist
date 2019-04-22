import React, { Component } from 'react';
import { getProjects, putProject } from './functions/connectDB';
import Project from './components/Project/Project.jsx';

import './styles/_dashboard.scss';
import FormValidator from '../../functions/formValidator';

class Dashboard extends Component {
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
        args: [{ min: 4 }],
        validWhen: true,
        message: 'Name project should have minimum 4 symbols',
      },
      {
        field: 'name',
        method: 'isByteLength',
        args: [{ max: 30 }],
        validWhen: true,
        message: 'Name project should have maximum 30 symbols',
      },
    ]);

    this.state = {
      isLoading: true,
      projects: [],
      error: null,
      name: '',
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

    let { name } = this.state;

    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    if (validation.isValid) {
      putProject({ name })
        .then((res) => {
          const projects = this.state.projects || [];
          projects.push({
            name: res.name,
            id: res.id
          });

          this.setState({
            projects: projects,
          });
        })
        .catch(error => console.log(error));
    }
  };

  fetchProjects() {
    getProjects()
      .then(data => {
        this.setState({
          projects: data.data,
          isLoading: false,
        });
      })
      .catch(error => {
        this.setState({
          error: error.response,
          isLoading: false,
        });
      });
  }

  update = (id) => {

  };

  componentDidMount() {
    this.fetchProjects();
  }

  render() {
    const { isLoading, projects, error } = this.state;
    let validation = this.submitted ?
      this.validator.validate(this.state) :
      this.state.validation;

    return (
      <div className="projects">
        <h1 className="projects__title title">Projects:</h1>
        <ul className="projects__list">
          {error ? <p>{error.message}</p> : null}
          {!isLoading && projects !== undefined ? (
            projects.map((projects) => {
              return (
                <Project data={projects} key={projects.id} callback={this.update}/>
              );
            })
          ) : (
            <h3 className="projects__load-title load-animation">Loading</h3>
          )}
        </ul>
        <form className="form-project" noValidate onSubmit={this.handleSubmit}>
          <div className="form__group">
            <div className={validation.name.isInvalid ? 'input error' : 'input'}
                 data-error={validation.name.message}>
              <input type="text" className="input__field" required placeholder="Project name"
                     name="name"
                     onInput={this.handleInput}/>
              <label className="input__label">Project name</label>
            </div>
          </div>
          <button className="btn btn-color">Add New Project</button>
        </form>
      </div>
    );
  }
}

export default Dashboard;
