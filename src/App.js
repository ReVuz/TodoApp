import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  return (
    <div className="App">
      <div className="mainHeading">
        <h1>TODO APP</h1>
      </div>
      <div className='input'>
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type='text' placeholder='Type Anything'></input>
        <button onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} >Finish</button>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (< div className="todo">
            <div className="left">
              <input onChange={(e) => {
                console.log(e.target.value)
                console.log(obj)
                setToDos(toDos.filter(obj2 => {
                  if (obj2.id === obj.id) {
                    obj2.status = e.target.checked
                  }
                  return obj2
                }))
              }} value={obj.status} type="checkbox" name="" id="" />
              <p>{obj.text}</p>
            </div>
            <div className="right">
            </div>
          </div>
          )
        })}
        {toDos.map((obj) => {
          if (obj.status) {
            return (<h1>{obj.text}</h1>)
          }
          return null
        })}
      </div>
    </div >
  );
}

export default App;
