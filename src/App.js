import React, { useState } from 'react';
import './App.css';

function App() {
  const [todu,setTodu]=useState("")
  const[tudus,setTodus]=useState([])

  const deleteTask = (index) => {
    const updatedTasks = [...tudus];
    updatedTasks.splice(index, 1);
    setTodus(updatedTasks);
  };
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br /> 
        <h2>Whoop, it's Monday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todu} onChange={(event)=>setTodu(event.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodus([...tudus,todu]) }  className="fas fa-plus"></i>
      </div>
      <div className="todos">
       {
        
        tudus.map((obj,index)=>{
          return(
          <div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>{obj}</p>
          </div>
          <div className="right">
            <i onClick={() => deleteTask(index)} className="fas fa-times"></i>
          </div>
        </div>
        )
        })
       
}
      </div>
    </div>
  );
}

export default App;
