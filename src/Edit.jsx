import React from 'react'
import { useState, useEffect } from 'react';

function Edit({ setToDos, toDos, todoToEdit }) {
    const [toDo, setToDo] = useState('')

    useEffect(() => {
        if (todoToEdit) {
            <div className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'>{setToDo(todoToEdit.text)}</div>
        }
    }, [todoToEdit]);

    const handleAdd = () => {
        if (toDo.trim() === '') {
            return;
        }

        if (todoToEdit) {
            // Update existing task
            setToDos(toDos.map((obj) => (obj.id === todoToEdit.id ? { ...obj, text: toDo, isEditing: false, id: Date.now() } : obj)));
            setToDo('');
        } else {
            // Add new task
            setToDos([...toDos, { id: Date.now(), text: toDo, status: false, isEditing: false }]);
            setToDo('');
        }
    };

    return (
        <div className='flex justify-center p-5'>
            <form className="w-full max-w-sm" onSubmit={(event) => event.preventDefault()}>
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input className="text-lg font-medium appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" value={toDo} onChange={(e) => setToDo(e.target.value)} placeholder='Update Task'></input>
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" onClick={handleAdd}>
                        Done
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Edit
