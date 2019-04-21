import React, {Component} from 'react';
import {getProjects, putProject} from "../UserFunctions";
import Project from './components/Project/Project.jsx';

import './styles/_dashboard.scss';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      projects: [],
      error: null,
      newItem: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      newItem: {
        [name]: value,
      }
    });
  }

  onSubmit = function (e) {
    e.preventDefault();

    putProject({name: this.state.newItem.name})
      .then((res) => {
        const projects = this.state.projects || [];
        projects.push({name: res.name, id: res.id});

        this.setState({
          projects: projects,
        });
      })
      .catch(error => console.log(error));
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

  componentDidMount() {
    this.fetchProjects();
  }

  render() {
    const {isLoading, projects, error} = this.state;

    return (
      <div className="projects">
        <h1 className="projects__title title">Projects:</h1>
        <ul className="projects__list">
          {error ? <p>{error.message}</p> : null}
          {!isLoading && projects !== undefined ? (
            projects.map((projects) => {
              return (
                <Project data={projects} key={projects.id}/>
              );
            })
          ) : (
            <h3>Loading...</h3>
          )}
        </ul>
        <form className="form-project" onSubmit={this.onSubmit}>
          <div className="form__group">
            <div className="input">
              <input type="text" className="input__field" required placeholder="Project name" name="name"
                     onChange={this.onChange}/>
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
