import React, { useState } from 'react';
import "./index.css";
import TodoLisi from "./todoLisi"

const App = () => {
  const [state, setstate] = useState("");
  const [data, setData] = useState([]);

  const changeEvent = (e) =>{
    setstate(e.target.value)
  }
  const addItems = () =>{
    setData((preValue) =>{
      return[...preValue, state]
    })
    setstate([])
  }

  const dltData = (id) =>{
    setData((oldValue) =>{
      return oldValue.filter((crnData,index) =>{
        return index !== id;
      })
    })
  }

  return (
    <>
      <dov className="container">
        <div className="todo">
          <h1>To Do List</h1>
          <div className="putData">
            <input type="text"
              placeholder="Add The Items"
              onChange={changeEvent}
              value={state}
            />
            <button onClick={addItems}>X</button>
          </div>
          <div className="lists">
            <ul>
            
            {
              data.map((crnVal, index) =>{
                return <TodoLisi
                  text= {crnVal}
                    id={index}
                    key={index}
                    dltData={dltData}
                />
              })
            }
              
            </ul>
          </div>
        </div>
      </dov>

    </>
  )
}

export default App;
