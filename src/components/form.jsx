import React, {useContext} from "react";
import '../css/form.css';
import BanIcon from '../svg/ban.svg';
import {todoContext} from "../App.jsx"

const Form=()=>{
    
    const {todos, updateTodos, inputText, updateInputText, editTodo, setEditTodo}=useContext(todoContext);

    const updateText=(e)=>{
        updateInputText(e.target.value);
    }

    const addTodoList=(e)=>{
        e.preventDefault();

        if(inputText !== ""){
            if(!todos){
                todos=[];
            }
            if(!editTodo){
                updateTodos(
                    [...todos, {inputText: inputText, completeAction: false, id: Math.random() *100 }]
                );
                updateInputText("");
            }
            else{
                const newTodo=todos.map(todo=>{
                    if(todo.id === editTodo.id){
                        return(({...todo, inputText: inputText}))
                    }
                    return todo; 
                })
                updateTodos(newTodo);
                updateInputText("");
                setEditTodo("");
            }
        }
    }

    return(
            <form>
            <div className="input-container">
            <div className="input-div">
            <input type='text' value={inputText} placeholder='make a task'
                onChange={updateText} 
            />
            </div>

            <div className='plus-btn'>
                <button onClick={addTodoList}> + </button>
            </div>

            <div className="ban">
                <img src={BanIcon} alt="ban" onClick={()=>{updateInputText("");}} />
            </div>

            </div>
            </form>
    )
    
}

export default Form;