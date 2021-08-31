import React, { useState } from "react";
import "./index.css";

const INITIAL_STATE = [
  { id: 1, title: "Go to the Supermarket", completed: false },
  { id: 2, title: "Pay bills",completed: true }
];

export default function App() {
  const [list, setList] = useState(INITIAL_STATE);
  const [newTitle, setNewTitle] = useState("");

  const addNew = (title) => {
      setList([...list, { id: Date.now(), title: title, completed: false }]);
    setNewTitle("");
  };
    
  return (

    <div className="App">
      <h1>ToDo Lists</h1>
      <div className="Add_form">
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholer="Add to List"
        
        />

      <button onClick={() => addNew(newTitle)}>Add</button>
    </div>

      <div className="list">
        {list.map(item => (
          <div onClick={()=> {
            setList(list.map(el =>el.id===item.id ? {...el,completed: !el.completed} :el))
           
            }
           } 
             
             className={item.completed ? "done" : ""}>
              {item.title}

      </div>
        )
      )
    }
      </div>

      <button onClick={() => setList(list.filter(item=>!item.completed))} className="Refresh">Delete</button>

    </div>

  );
}

