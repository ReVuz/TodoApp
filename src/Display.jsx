import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import Edit from './Edit';
import { useState, useEffect } from 'react';
import fetchData from './fetchData';
import { supabase } from './lib/helper/supabaseClient';
import ClockLoader from 'react-spinners/ClockLoader'

function Display({ setToDos, toDos }) {

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetchData(setToDos);
        setTimeout(() => {
            setLoading(false)
        }, 300)
    }, [setToDos])

    const removeTodo = (id) => {
        console.log(id);
        const newTodos = toDos.filter((obj) => obj.id !== id); // Keep only todos with different IDs
        setToDos(newTodos);
        delTodo(id)
    };

    const editTask = (id) => {
        setToDos(toDos.map(obj => obj.id === id ? { ...obj, isEditing: !obj.isEditing } : obj))
    }

    async function delTodo(id) {
        await supabase
            .from('Todo_list')
            .delete()
            .eq('id', id)

    }

    return (
        <div className="todos">
            {loading && (
                <div className='absolute inset-0 flex items-center justify-center right-10'>
                    <ClockLoader color={"#36d7b7"} loading={loading} size={50} />
                </div>
            )}
            {toDos.map((obj) => {
                const todoClassName = `todo flex items-center justify-between border rounded ${obj.id % 2 === 0 ? 'border-emerald-500' : 'border-sky-400'} ${obj.checked ? 'line-through ' : ''
                    }`;

                return (
                    <div className={todoClassName} key={obj.id}>
                        {!obj.isEditing && (<div className="p-5 left">
                            <input onChange={(e) => {
                                // console.log(e.target.value)
                                setToDos(toDos.filter(obj2 => {
                                    if (obj2.id === obj.id) {
                                        obj2.checked = e.target.checked
                                        console.log(obj)
                                    }
                                    // console.log(e.target.value)
                                    // console.log(obj)
                                    return obj2
                                }))
                            }} checked={obj.checked} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={async () => {
                                await supabase
                                    .from('Todo_list')
                                    .update({ checked: !obj.checked })
                                    .eq('id', obj.id)
                                    .select();
                            }} />
                            <label htmlFor="bordered-checkbox-1" className="text-lg font-medium text-gray-900 p-4">{obj.Todo}</label>
                        </div>)}
                        {obj.isEditing && <Edit setToDos={setToDos} toDos={toDos} todoToEdit={obj} />}
                        < div className="right flex">
                            <span className="text-sm text-gray-500 mx-4">{new Date(obj.created_at).toLocaleString()}</span>
                            <FiEdit className='text-xl hover:bg-red-95 hover:text-indigo-600 rounded-md border-spacing-1 mx-1' onClick={() => editTask(obj.id)} />
                            <FaRegTrashCan className='text-xl hover:bg-red-95 hover:text-red-600 rounded-md border-spacing-1' onClick={() => removeTodo(obj.id)} />
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default Display