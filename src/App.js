import './App.css';
import React, { useState } from 'react';


function App() {

  const [allTasks, setAllTasks] = useState(["Shopping", "Exercising", "Coding"])
  const [newTask, setTask] = useState("")

  const showTasks = allTasks.map((task, index) => {
    return <li key={index}>{task}</li>
  })

  const handleTaskInput = (event) => {
    console.log('change');
    setTask(event.target.value)
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    console.log('newTask')
    const newTaskItem = newTask
    const newListOfTasks = [...allTasks, newTaskItem];
    setAllTasks(newListOfTasks);
    setTask('')
  }




  return (
    <div className='to-do-list-container'>

      <h1>To Do List</h1>    
      <hr />  

      <ul>
        {showTasks}
      </ul>

      <form onSubmit={saveNewTask}>
        <label htmlFor="to-do-task-input">Add a new to do task:</label>
        <input type="text" name="to-do-task-input" id="to-do-task-input" value={newTask} onChange={handleTaskInput}/>
        <input type="submit" value="Save new task" />
      </form>

    </div>
  );
}

export default App;
