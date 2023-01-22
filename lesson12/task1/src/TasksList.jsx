import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

class TasksList extends Component {
  state = {
    tasks: [
      { text: ' op op na na nay', done: false, id: 1 },
      { text: ' op op', done: true, id: 2 },
    ],
  };

  render() {
    return (
      <div className="todo-list">
        <CreateTaskInput />
        <ul className="list">
          {this.state.tasks.map(task => (
            <Task key={task.id} {...task} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
