import { useState } from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    {name: "Buy bread", priority: "high"},
    {name: "Go swimming", priority: "low"},
    {name: "Walk dog", priority: "low"},
  ]

  )
    
  const [newTask, setNewTask] = useState("")


  const removeTask = (task, index) => {
    task.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.pop(index)
    setTasks(copyTasks);
  }

  const taskNodes = tasks.map((task, index) => {
    return(
      <li key={index} className={task.priority}>
        <span>{task.name} { task.priority == "high" ? <span>⚠️</span> : null } </span>
        <button onClick={removeTask}>Complete</button>
      </li>
    )
  })

  const handleTaskInput = (task) => {
    setNewTask(task.target.value);
  }


  const saveNewTask = (task) => {
    task.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push( {
      name: newTask,
      priority: task.target.priority.value
    })
    setTasks(copyTasks);
    setNewTask("");



  }


  return (
    <div className="App">
      
      <h1>ToDo List</h1>

      <hr></hr>
      <br></br>

      <form onSubmit={saveNewTask}>
        <label htmlFor='new-task'> New Task: </label>
        <input
        id='new-task'
        value={newTask}
        onChange={handleTaskInput}
        required
        />
        <label htmlFor="low"> Low</label>
        <input 
        id="low"
        name="priority"
        type="radio" 
        value="low" 
         />
        <label htmlFor="high">High</label>
        <input 
        id="high"
        name="priority"
        type="radio" 
        value="high"
        />
        <button>Add</button>
      </form>

      <ul>
        { taskNodes }
      </ul>
    </div>
  );
}

export default App;
