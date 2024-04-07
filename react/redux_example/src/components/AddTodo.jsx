import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice'

function AddTodo({input,setInput,editID,setEditID,inputRef,btnText,setBtnText}) {
    const dispatch = useDispatch()
    const inputFormHandler = (e) => {
      e.preventDefault()
      if(editID){
        // console.log('Debug-input-handler: '+input)
        dispatch(updateTodo({id:editID,text:input}))
        setEditID(undefined)
        setBtnText('Add todo')
      }else{
        dispatch(addTodo(input))
      }
      setInput('')
    }
    
  return (
    <form onSubmit={inputFormHandler}>
        <input 
        type="text" 
        ref={inputRef}
        placeholder="Enter your todo"
        value={input}
        onChange={(e)=>{
          // console.log('Debug-target.value: '+e.target.value)
          setInput(e.target.value)
          // console.log('Debug-input-onchange: '+input)
        }}
        /><br/><br/>
        <button>{btnText}</button>
    </form>
  )
}

export default AddTodo