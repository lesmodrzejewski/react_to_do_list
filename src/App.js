import './App.css';
import React, { useState } from 'react';


function App() {

  const [allTasks, setAllTasks] = useState([
    {name: 'Shopping', priority: 'low'},
    {name: 'Coding', priority: 'high'},
    {name: 'Cleaning Car', priority: 'low'},
    {name: 'Cooking', priority: 'high'}
  ])

  const [newTask, setTask] = useState('')
  const [taskPriority, setTaskPriority] = useState('')

  const showTasks = allTasks.map((task, index) => {
    console.log(task);
    return <li key={index} className={task.priority}>{task.name}</li>
  })

  const handleTaskInput = (event) => {
    setTask(event.target.value)
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    const newTaskItem = {name: newTask, priority: taskPriority}
    const newListOfTasks = [...allTasks, newTaskItem];
    setAllTasks(newListOfTasks);
    setTask('')
  }

  const handleChange = (event) => {
    setTaskPriority(event.target.value)
  }

  return (
    <div className='to-do-list-container'>

      <h1>To Do List</h1>    
      <hr />  

      <h2 className='high'>high priority</h2>
      <h2 className='low'>low priority</h2>

      <form onSubmit={saveNewTask}>
        <label htmlFor="to-do-task-input">New task:</label>
        <input type="text" name="to-do-task-input" id="to-do-task-input" value={newTask} onChange={handleTaskInput}/>
        <label htmlFor="task-low">Low</label>
        <input type="radio" name="priority" id="task-low" value="low" onChange={handleChange} defaultChecked/>
        <label htmlFor="task-high">High</label>
        <input type="radio" name="priority" id="task-high" value="high" onChange={handleChange}/>
        <input type="submit" value="Save new task" />
      </form>

      <ul>
        {showTasks}
      </ul>

    </div>
  );
}

export default App;
