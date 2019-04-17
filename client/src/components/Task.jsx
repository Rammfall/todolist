import React, {Component} from 'react';

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: this.props.data
    };
  }

  render() {
    const {name, id, status, date, project_id} = this.props.data;

    return (
      <div className="col-md-12" data-id={id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle">{date}</h6>
            <button className="btn btn-outline-secondary">Edit task</button>
            <button className="btn btn-danger">Delete task</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
