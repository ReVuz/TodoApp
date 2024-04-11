import Input from './Input';
import Display from './Display';
import { useState } from 'react';


function App() {
  const [toDos, setToDos] = useState([])


  return (
    <div className=" min-h-screen bg-gradient-to-r to-emerald-600 from-sky-400 p-5">
      <div className="group rounded mx-auto max-w-[750px] min-h-[630px] bg-white hover:neon-teal ">
        <h1 className="text-center p-4 mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-sky-400 transition-colors duration-300 ease-in-out group-hover:to-sky-500 group-hover:from-emerald-400">
          TODO APP
        </h1>
        <Input setToDos={setToDos} toDos={toDos} />
        <Display setToDos={setToDos} toDos={toDos} />
        {/* {toDos.map((obj) => {
          if (obj.status) {
            return (<h1>{obj.text}</h1>)
          }
          return null
        })} */}
      </div>
    </div>

  );
}

export default App;