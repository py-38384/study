import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import editTodoActivator from './AddTodo'

function Todo({setInput,setEditID,inputRef,setBtnText}) {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const editTodoActivator = (e) => {
        setInput(e.target.parentNode.children[0].innerHTML)
        setEditID(e.target.dataset.id)
        inputRef.current.focus()
        setBtnText('Update todo')
    }
  return (
    <>
        <h1>Todos</h1>
        {todos.map((todo)=>(
            <li key={todo.id}>
                <span>{todo.text}</span>
                <button
                onClick={()=>dispatch(removeTodo(todo.id))}
                >
                    X
                </button>
                <button
                data-id={todo.id}
                onClick={(e) => editTodoActivator(e)}
                >
                    edit
                </button>
            </li>
        ))}
    </>
  )
}

export default Todo