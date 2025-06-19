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
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
        {/* title section  */}
        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={todo_icon} alt="" />
           <h1 className='text-3xl font-semibold'>To-Do List</h1>
        </div>
        {/* input section */}
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type='text' placeholder='Add your task' ref={task} />
            <button onClick={createTask} className='border-none rounded-full bg-orange-500 w-14 h-14 text-white text-2xl font-medium cursor-pointer'>+</button>
        </div>
        {/* list section */}
        <div>
            {display}
        </div>
    </div>
  )
}

export default Todo