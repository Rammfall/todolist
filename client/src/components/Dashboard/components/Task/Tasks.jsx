import React, {Component} from 'react';
import Task from './Task.jsx';
import {getTasks, putTask} from '../../../UserFunctions';
import './styles/_tasks.scss';

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectId: this.props.projectId,
      isLoading: true,
      tasks: [],
      error: null,
      newItem: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    putTask({
      project_id: `${this.state.projectId}`,
      name: this.state.newItem.name,
      deadline: this.state.newItem.deadline
    })
      .then((res) => {
        const tasks = this.state.tasks || [];
        tasks.push(res.info);

        this.setState({
          tasks: tasks,
        });
      })
      .catch(error => console.log(error));
  }

  onChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    console.log(this.state);

    this.setState({
      newItem: {
        [name]: value,
      }
    });
  }

  fetchTasks() {
    console.log(this.props.project_id);
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
        <form className="tasks__form" onSubmit={this.onSubmit}>
          <div className="form__group tasks__form-group">
            <div className="input">
              <input type="text" name="name" placeholder="Task name" className="input__field" onChange={this.onChange}
                     required/>
              <label className="input__label">Task name</label>
            </div>
          </div>
          <div className="form__group tasks__form-group">
            <div className="input">
              <input type="date" name="deadline" placeholder="Deadline task" className="input__field input__date" required/>
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
