import React from 'react'

const Task = ({title, description}) =>{
    return (
        <div className='flex flex-row justify-evenly bg-white rounded-lg border shadow-xl p-3 my-3 text-black'>
            <div>
            <p>{title}</p>
            <p>{description}</p>
            </div>
            <div>
                <button>Delete</button>
                <button>Edit</button>
            </div>
        </div>
    )
}
export default Task;