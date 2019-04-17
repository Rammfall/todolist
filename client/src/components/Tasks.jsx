import React, {Component} from 'react';
import Task from './Task.jsx';
import {getProjects, getTasks} from './UserFunctions'

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
  }

  fetchTasks() {
    console.log(this.props.project_id);
    getTasks({id: this.props.projectId})
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
    const {isLoading, tasks, error} = this.state;

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
      </div>
    );
  }
}

export default Tasks;
