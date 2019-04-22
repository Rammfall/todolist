import React, {Component} from 'react';
import Task from './Task.jsx';
import {getTasks, putTask} from './../../functions/connectDB';
import './styles/_tasks.scss';
import FormValidator from './../../../../functions/formValidator';

class Tasks extends Component {
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
      project_id: this.props.projectId,
      isLoading: true,
      tasks: [],
      error: null,
      name: '',
      deadline: '',
      validation: this.validator.valid(),
    };

    this.submitted = false;
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
      putTask({
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

  fetchTasks() {
    getTasks({id: `${this.props.projectId}`})
      .then(data => {
        this.setState({
          tasks: data.data,
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
    this.fetchTasks();
  }

  render() {
    const {isLoading, tasks} = this.state;
    let validation = this.submitted ?
      this.validator.validate(this.state) :
      this.state.validation;

    return (
      <div className="tasks">
        <h3 className="tasks__title">Project tasks:</h3>
        <ul className="tasks__list">
          {!isLoading && tasks !== undefined ? (
            tasks.map((item) => {
              return (<Task data={item} key={item.id}/>);
            })
          ) : (
            <p className="load-animation">Loading...</p>
          )}
        </ul>
        <form className="tasks__form" noValidate onSubmit={this.handlerSubmit}>
          <div className="form__group tasks__form-group">
            <div className={validation.name.isInvalid ? 'input error' : 'input'} data-error={validation.name.message}>
              <input type="text" name="name" placeholder="Task name" className="input__field" onInput={this.handlerInput}
                     required/>
              <label className="input__label">Task name</label>
            </div>
          </div>
          <div className="form__group tasks__form-group">
            <div className={validation.deadline.isInvalid ? 'input error' : 'input'} data-error={validation.deadline.message}>
              <input type="date" name="deadline" placeholder="Deadline task" className="input__field input__date"
                     required onInput={this.handlerInput} />
              <label className="input__label">Task deadline</label>
            </div>
          </div>
          <button type="submit" className="btn btn-color">Add task</button>
        </form>
      </div>
    );
  }
}

export default Tasks;
