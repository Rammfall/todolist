import React, { Component } from 'react';
import Tasks from '../../Tasks.jsx';
import Modal from '../../ProjectModal.jsx';
import {dropProject} from "../../UserFunctions";

class Project extends Component {
  constructor(props){
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

    this.setState({ data });
  };

  replaceModalItem(index) {
    this.setState({
      requiredItem: index
    });
  };

  render() {
    const { id, name } = this.props.data;

    return this.state.isAlive ? (
      <div className=" col-md-12" data-id={id}>
        <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <button className="btn btn-outline-secondary">Edit project</button>
          <button className="btn btn-danger" onClick={this.clickDelete}>Delete project</button>
          <Tasks projectId={id}/>
          <Modal data={{name, id}}/>
        </div>
        </div>
      </div>
    ) : null;
  }
}

export default Project;
