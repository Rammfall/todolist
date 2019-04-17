import React, { Component } from 'react';
import {dropProject} from "./UserFunctions";

class Project extends Component {
  constructor(props){
    super(props);

    this.state = {
      isAlive: true,
      id: this.props.data.id,
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    dropProject({id: this.state.id})
      .then((res) => {
        console.log({id: this.state.id});
        this.setState({isAlive: false});
      })
      .catch(error => console.log(error));
  }

  render() {
    const { id, name } = this.props.data;

    return this.state.isAlive ? (
      <div className=" col-md-6" data-id={id}>
        <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <button className="btn btn-outline-secondary">Edit project</button>
          <button className="btn btn-danger" onClick={this.clickHandler}>Delete project</button>
        </div>
        </div>
      </div>
    ) : '';
  }
}

export default Project;
