import React, {Component} from 'react';
import { dropTask, editTask, putTask } from './../../functions/connectDB';
import FormValidator from '../../../../functions/formValidator';

class Task extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator([
      {
        field: 'name',
        method: 'isEmpty',
        validWhen: false,
        message: 'Task name is required',
      },
      {
        field: 'name',
        method: 'isByteLength',
        args: [{min: 4}],
        validWhen: true,
        message: 'Task name should have minimum 4 symbols',
      },
      {
        field: 'name',
        method: 'isByteLength',
        args: [{max: 30}],
        validWhen: true,
        message: 'Task name should have maximum 60 symbols',
      },
      {
        field: 'deadline',
        method: 'isEmpty',
        validWhen: false,
        message: 'Deadline is required',
      },
    ]);

    this.state = {
      data: this.props.data,
      isAlive: true,
      name: this.props.data.name,
      id: this.props.data.id,
    };

    this.submitted = false;
    this.clickDelete = this.clickDelete.bind(this);
  }

  clickDelete () {
    dropTask({id: `${this.state.data.id}`})
      .then(() => {
        this.setState({isAlive: false})
      })
      .catch();
  }

  handlerInput = (event) => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handlerSubmit = (event) => {
    event.preventDefault();

    let {name, deadline} = this.state;

    const validation = this.validator.validate(this.state);
    this.setState({validation});
    this.submitted = true;

    if (validation.isValid) {
      editTask({
        name,
        deadline,
        project_id: `${this.state.project_id}`,
      })
        .then((res) => {
          const tasks = this.state.tasks || [];
          let date = new Date(res.info.deadline).toLocaleString('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          });
          tasks.push({
            deadline: date,
            id: res.info.id,
            name: res.info.name,
            status: res.info.status,
          });
          console.log(tasks);

          this.setState({
            tasks: tasks,
          });
        })
        .catch(error => console.log(error));
    }
  };

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
