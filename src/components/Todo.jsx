import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'
const Todo = () => {

    const [todo,setTodo]=useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]);
    const task=useRef();
    const createTask=()=>{
        const text=task.current.value.trim();
        if(text===""){
            alert("Enter your task please!");
            return null;
        }
        const newTodo={
            id:Date.now(),
            data:text,
            isCompleted:false
        }
        setTodo((prev)=>[...prev,newTodo]);
        task.current.value="";
    }
    const deleteTask=(id)=>{
        setTodo((prev)=>{
           return  prev.filter((item)=>item.id!=id)
        })
    }
     const toggle=(id)=>{
        setTodo((prev)=>{
          return prev.map((work)=>{
                if(work.id===id){
                    return {...work,isCompleted:(!work.isCompleted)};
                }
                return work;
            })
        })
    }
    useEffect(()=>{
       localStorage.setItem("todos",JSON.stringify(todo));
    },[todo]);
    const display=todo.map((work,index)=>{
        return <TodoItems key={index} value={work} method1={deleteTask} method2={toggle}/>
    })
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-5 sm:p-7 min-h-[550px] rounded-xl shadow-md'>
  {/* title section */}
  <div className='flex items-center mt-4 sm:mt-7 gap-2 sm:gap-3'>
    <img className='w-6 sm:w-8' src={todo_icon} alt="todo icon" />
    <h1 className='text-2xl sm:text-3xl font-semibold'>To-Do List</h1>
  </div>

  {/* input section */}
  <div className='flex items-center my-5 sm:my-7 bg-gray-200 rounded-full'>
    <input
      className='bg-transparent border-0 outline-none flex-1 h-12 sm:h-14 pl-4 sm:pl-6 pr-2 placeholder:text-slate-600 text-sm sm:text-base'
      type='text'
      placeholder='Add your task'
      ref={task}
    />
    <button
      onClick={createTask}
      className='border-none rounded-full bg-orange-500 w-12 sm:w-14 h-12 sm:h-14 text-white text-xl sm:text-2xl font-medium cursor-pointer transition hover:bg-orange-600'
    >
      +
    </button>
  </div>

  {/* list section */}
  <div className='overflow-y-auto max-h-[400px]'>
    {display}
  </div>
</div>

  )
}

export default Todo