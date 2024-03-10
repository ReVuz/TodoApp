import React from 'react'
import { useState } from 'react';

function Input({ setToDos, toDos }) {
    const [toDo, setToDo] = useState('')

    return (
        <div className='flex justify-center p-5'>
            <form className="w-full max-w-sm">
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" value={toDo} onChange={(e) => setToDo(e.target.value)} placeholder='Type Anything'></input>
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" onClick={() => {
                        setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
                        setToDo('');
                    }}>
                        Add
                    </button>
                    <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button" onClick={() => { setToDo(''); }}>
                        Clear
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Input