import { createSlice,createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const initialState = {
    todos: [],
    completeStatus: "All",
    status: "idle",
    error: null
}

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async()=>{
    try{
        const response = await axios.get(TODOS_URL);
        return [...response.data]
    }
    catch(error){
        return error.message;
    }
})

export const addNewTodo = createAsyncThunk("todos/addNewTodo", async(initialTodo)=>{
    const newTodo={title: initialTodo}
    try{
        const response = await axios.post(TODOS_URL, newTodo)
        console.log("response data", response.data)
        return response.data;

    }
    catch(error){
        return error.message;
    }
})

const todoSlice= createSlice({
    name: "todos",
    initialState,
    reducers: {
        updateCompletedStatus(state, action){
            state.completeStatus = action.payload;
        }
    },
    extraReducers(builder){
        builder
        .addCase(fetchTodos.pending, (state)=>{
            state.status = "loading";
        })
        .addCase(fetchTodos.fulfilled, (state, action)=>{
            state.status = "succeeded";
            const loadedPost = action.payload.map(todo=>{
                todo.todoId = nanoid();
                todo.date = new Date().toISOString();
                return todo;
            })
            state.todos = loadedPost;
        })
        .addCase(fetchTodos.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(addNewTodo.fulfilled, (state, action)=>{
            action.payload.todoId = nanoid();
            action.payload.date = new Date().toISOString();
            state.todos.push(action.payload);
        })

    }

})

export const selectAllTodos= (state) => state.todos.todos;
export const getTodoStatus = (state) => state.todos.status; 
export const getTodoError = (state) => state.todos.error;
export const getCompleteStatus = (state) => state.todos.completeStatus;

export const {updateCompletedStatus} = todoSlice.actions;
export default todoSlice.reducer;