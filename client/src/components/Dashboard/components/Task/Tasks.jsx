import React, {Component} from 'react';
import Task from './Task.jsx';
import { getTasks, putTask } from '../../../UserFunctions';

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

  onSubmit (e) {
    e.preventDefault();

    putTask({project_id: `${this.state.projectId}`, name: this.state.newItem.name, deadline: this.state.newItem.deadline })
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

    this.setState({newItem: {
        [name]: value,
      }});
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
      <div>
        <h2>Tasks:</h2>
        {!isLoading && tasks !== undefined ? (
          tasks.map((item) => {
            return (<Task data={item} key={item.id}/>);
          })
        ) : (
          <p>Loading...</p>
        )}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" aria-describedby="emailHelp"
                   placeholder="Enter task name" name="name" onChange={this.onChange}/>
            <input type="date" className="form-control" aria-describedby="emailHelp"
                   placeholder="Enter task name" name="deadline" onChange={this.onChange}/>
          </div>
          <button type="submit" className="btn btn-primary">Add task</button>
        </form>
      </div>
    );
  }
}

export default Tasks;
