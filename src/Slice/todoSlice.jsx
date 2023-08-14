import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
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
            console.log("action.payload", action.payload)
            state.status = "succeeded";
            state.todos = action.payload;
        })
        .addCase(fetchTodos.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })

    }

})

export const selectAllTodos= (state) => state.todos.todos;
export const getTodoStatus = (state) => state.todos.status; 
export const getTodoError = (state) => state.todos.error;
export const getCompleteStatus = (state) => state.todos.completeStatus;

export const {updateCompletedStatus} = todoSlice.actions;
export default todoSlice.reducer;