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
    const {name, deadline} = this.state.data;

    return (
      this.state.isAlive ? (
      <li className="task">
        <h4 className="task__title">{name}</h4>
        <div className="task__date">{deadline}</div>
        <button className="btn btn-color">Edit task</button>
        <button className="btn btn-danger" onClick={this.clickDelete}>Delete task</button>
      </li>
      ) : ''
    );
  }
}

export default Task;
