import React, {Component} from 'react';
import Tasks from '../Task/Tasks.jsx';
import {dropProject} from "../../../UserFunctions";

import './styles/_project.scss';

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAlive: true,
      id: this.props.data.id,
      requiredItem: 0,
      data: this.props.data,
    };

    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.clickDelete = this.clickDelete.bind(this);
    this.replaceModalItem = this.replaceModalItem.bind(this);
  }

  clickDelete() {
    dropProject({id: `${this.state.id}`})
      .then(() => {

        this.setState({isAlive: false});
      })
      .catch(error => console.log(error));
  };

  saveModalDetails(item) {
    let data;
    data = item;

    this.setState({data});
  };

  replaceModalItem(index) {
    this.setState({
      requiredItem: index
    });
  };

  render() {
    const {id, name} = this.props.data;

    return this.state.isAlive ? (
      <li className="project">
        <div className="project__header">
          <h2 className="project__title">{name}</h2>
          <button className="btn">Edit project</button>
          <button className="btn btn-danger" onClick={this.clickDelete}>Delete project</button>
        </div>
        <Tasks projectId={id}/>
      </li>
    ) : null;
  }
}

export default Project;
