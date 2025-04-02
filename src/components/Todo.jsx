import React, { useState } from 'react'

const Todo = () => {
    const [tasks, setTasks] = useState(["make","do","learn"]);
    const [newTask,setNewTask] = useState("");

    const handleChange=(e)=>{
        setNewTask(e.target.value)
    }
    const addTask=()=>{
        setTasks(t=>[...t,newTask])
        setNewTask("")  

    }

    const deleteTask=(index)=>{
        setTasks(t=>t.filter((taks,i)=>i!==index))
    }

    const handleup=(index)=>{


        if(index>0){
            const updatedTasks=[...tasks]
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index - 1];
            updatedTasks[index - 1] = temp;
             setTasks(updatedTasks)}
    }
    

  return (
    <div>
      <input
        type="text"
        placeholder="add new task"
        value={newTask}
        onChange={handleChange}
      />
      <button onClick={addTask}>add</button>

<ol>
      {tasks.map((task, index) => (
    
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>delete</button>
            <button onClick={() => handleup(index)}>^</button>
            {/* <button onClick={() => deleteTask(index)}>v</button> */}
          </li>
    
      ))}
      </ol>
    </div>
  );
}

export default Todo