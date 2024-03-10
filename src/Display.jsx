import React from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

function Display({ setToDos, toDos }) {
    return (
        <div className="todos">
            {toDos.map((obj) => {
                const todoClassName = `todo flex items-center justify-between border border-gray-200 rounded ${obj.id % 2 === 0 ? 'border-emerald-500' : 'border-sky-400'} ${obj.status ? 'line-through ' : ''
                    }`;

                return (
                    <div className={todoClassName} key={obj.id}>
                        <div className="p-5 left">
                            <input onChange={(e) => {
                                // console.log(e.target.value)
                                // console.log(obj)
                                setToDos(toDos.filter(obj2 => {
                                    if (obj2.id === obj.id) {
                                        obj2.status = e.target.checked
                                    }
                                    // console.log(e.target.value)
                                    console.log(obj)
                                    return obj2
                                }))
                            }} value={obj.status} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={() => { }} />
                            <label htmlFor="bordered-checkbox-1" className="text-lg font-medium text-gray-900 p-4">{obj.text}</label>
                        </div>
                        <div className="right flex">
                            <FiEdit className='text-2xl ' />
                            <MdOutlineDeleteOutline className='text-2xl' />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Display
