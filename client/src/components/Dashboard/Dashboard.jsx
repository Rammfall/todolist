import React, {Component} from 'react';
import {getProjects, putProject} from "../UserFunctions";
import Project from './components/Project.jsx';

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

    this.setState({newItem: {
        [name]: value,
      }});
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
      <React.Fragment>
        <h1>Projects:</h1>
        {error ? <p>{error.message}</p> : null}
        <div className="container">
          <div className="row">
            {!isLoading && projects !== undefined ? (
              projects.map((projects) => {
                return (
                  <Project data={projects} key={projects.id}/>
                );
              })
            ) : (
              <h3>Loading...</h3>
            )}
          </div>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Project name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                   placeholder="Enter project name" name="name" onChange={this.onChange}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.
            </small>
          </div>
          <button type="submit" className="btn btn-primary">Add project</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Dashboard;
