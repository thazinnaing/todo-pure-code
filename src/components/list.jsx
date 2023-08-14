import React from 'react';
import "../css/list.css";
import ListItem from './listItem';
import Selectionbox from './selectionBox';

const List=()=>{
  
    return(
        <div className="todo-container">
            <div className="todo-content">
            
            {
            filtertodos && filtertodos.map((todo)=>{
                return(
                <ListItem todo={todo} key={todo.id}/>
                )
            })
            }

            </div>
            <div className="selection">
            {
                <Selectionbox/>
            }
            </div>
        </div>

    )
}

export default List;