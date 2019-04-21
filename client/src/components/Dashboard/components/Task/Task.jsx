import React, {Component} from 'react';
import {dropTask} from '../../../UserFunctions';

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      isAlive: true,
    };

    this.clickDelete = this.clickDelete.bind(this);
  }

  clickDelete () {
    dropTask({id: `${this.state.data.id}`})
      .then(() => {
        this.setState({isAlive: false})
      })
      .catch();
  }

  render() {
    const {name, id, deadline} = this.state.data;

    return (
      this.state.isAlive ? (
      <div className="col-md-12" data-id={id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle">{deadline}</h6>
            <button className="btn btn-outline-secondary">Edit task</button>
            <button className="btn btn-danger" onClick={this.clickDelete}>Delete task</button>
          </div>
        </div>
      </div>
      ) : ''
    );
  }
}

export default Task;
