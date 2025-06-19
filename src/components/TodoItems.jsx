import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete_icon.png'
const TodoItems = (props) => {
    const {id,data,isCompleted}=props.value;
    const deleteTask=props.method1;
    const toggle=props.method2;
  return (
   <div className='flex items-center justify-between my-2 gap-2 sm:gap-4 hover:bg-gray-500'>
  {/* Toggle Complete Section */}
  <div
    className='flex flex-1 items-center gap-3 sm:gap-4 cursor-pointer'
    onClick={() => toggle(id)}
  >
    <img className='w-6 sm:w-7' src={isCompleted ? tick : not_tick} alt="status icon" />
    <p
      className={`text-slate-700 text-sm sm:text-base ${isCompleted ? "line-through" : ""}`}
      id={id}
    >
      {data}
    </p>
  </div>

  {/* Delete Icon */}
  <img
    className='w-4 sm:w-4.5 cursor-pointer'
    src={delete_icon}
    alt="delete"
    onClick={() => deleteTask(id)}
  />
</div>

  )
}

export default TodoItems