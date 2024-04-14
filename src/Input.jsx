import React from 'react'
import { useState } from 'react';
import { supabase } from './lib/helper/supabaseClient';
// import fetchData from './fetchData';

function Input({ setToDos, toDos }) {
    const [toDo, setToDo] = useState('')

    const handleAdd = () => {
        if (toDo.trim() === '') {
            return;
        }
        setToDo('');
        addTodo();
    };

    async function addTodo() {
        const { data: newTodo } = await supabase
            .from('Todo_list')
            .insert([{ Todo: toDo }])
            .select();

        setToDos([...toDos, newTodo[0]]); // Update toDos state with new todo
    }

    async function handleClear() {
        await supabase
            .from('Todo_list')
            .delete()
            .eq('checked', false)

        await supabase
            .from('Todo_list')
            .delete()
            .eq('checked', true);
        setToDos([])

    }

    return (
        <div className='flex justify-center p-5'>
            <form className="w-full max-w-sm" onSubmit={(event) => event.preventDefault()}>
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input className="appearance-none bg-transparent dark:text-white border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" value={toDo} onChange={(e) => setToDo(e.target.value)} placeholder='Type Anything'></input>
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" onClick={handleAdd}>
                        Add
                    </button>
                    <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button" onClick={handleClear}>
                        Clear All
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Input