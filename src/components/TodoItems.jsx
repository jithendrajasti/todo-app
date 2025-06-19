import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete_icon.png'
const TodoItems = (props) => {
    const {id,data,isCompleted}=props.value;
    const deleteTask=props.method1;
    const toggle=props.method2;
  return (
    <div className='flex items-center my-3 gap-2'>
       <div className='flex flex-1 items-center my-3 cursor-pointer'onClick={()=>{toggle(id)}}>
          <img className='w-7' src={isCompleted ? tick : not_tick} alt="" />
         <p className={`text-slate-700 ml-4 text-[17px] ${isCompleted?"line-through":""}`} id={id}>{data}</p>
       </div>
       <img className='w-3.5 cursor-pointer' src={delete_icon} alt="" onClick={()=>{deleteTask(id)}}/>
    </div>
  )
}

export default TodoItems