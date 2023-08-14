import React from "react";
import "../css/list.css";

import TickIcon from "../svg/tick.svg";
import TrashIcon from "../svg/trash.svg";
import DoublecheckIcon from "../svg/double-check.svg";
import EditIcon from '../svg/edit.svg';

const ListItem=()=>{
   
    return(
        <div className="todo">
                <div className={`text ${todo.completeAction ? 'line' : ''}`}>{todo.inputText}</div>

                <div className="edit">
                    <img src={EditIcon} alt="edit" />
                </div>

                <div className="tick">
                    <img src={`${todo.completeAction? DoublecheckIcon : TickIcon}`} alt="tick"
                    />
                </div>
                <div className="trash">
                    <img src={TrashIcon} alt="Trash"
                    />
                </div>
            </div>
    )
}

export default ListItem;