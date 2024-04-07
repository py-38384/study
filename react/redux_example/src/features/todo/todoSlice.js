import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [{id: 1, text: "Hallo world"}]
    },
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos.forEach((todo)=>{
                console.log("Debug-foreach-id: "+action.payload.id)
                console.log("Debug-foreach-todo-id: "+todo.id)
                if(String(todo.id)===(action.payload.id)){
                    todo.text = action.payload.text
                }
            })
                
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer