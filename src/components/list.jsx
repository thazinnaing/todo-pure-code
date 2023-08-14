import React, { useEffect, useState } from 'react';
import "../css/list.css";
import ListItem from './listItem';
import Selectionbox from './selectionBox';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllTodos, getTodoStatus, getTodoError, getCompleteStatus, fetchTodos } from '../Slice/todoSlice';

const List=()=>{
    const dispatch= useDispatch();
    const todos = useSelector(selectAllTodos);
    const status = useSelector(getTodoStatus);
    const error = useSelector(getTodoError);
    const completeAction = useSelector(getCompleteStatus)

    const [filterTodos, setFilterTodos]= useState([]);

    useEffect(()=>{
        if(status === "idle"){
            dispatch(fetchTodos())
        }
    })

    useEffect(()=>{
        if(completeAction === "All"){
            setFilterTodos([...todos]);
        }
        else if(completeAction === "Completed"){
            setFilterTodos(todos.filter(todo => todo.completed))
        }
        else if(completeAction === "Uncompleted"){
            setFilterTodos(todos.filter(todo => !todo.completed))
        }
    },[todos, completeAction])

    console.log("todos", todos);
    console.log("filtered todos", filterTodos);
    
    const showTodos = filterTodos.slice().sort((a,b)=> b.date.localeCompare(a.date))
    console.log("showtodos", showTodos)
    
    let content;
    if(status === "loading"){
        content = <p className='content'>LOADING... </p>
    }
    else if(status === "failed"){
        content = <p className='content'>{error}</p>
    }
    else if(status === "succeeded"){
        content= showTodos?.map((todo)=>{
            console.log(todo)
                    return(<ListItem key={todo.todoId} todo={todo}/>)
                })
    }

    return(
        <div className="todo-container">
            <div className="todo-content">
            {content}
            </div>
            <div className="selection">
            {
                todos && <Selectionbox/>
            }
            </div>
        </div>

    )
}

export default List;