import React from "react";
import "../css/list.css";

import TickIcon from "../svg/tick.svg";
import TrashIcon from "../svg/trash.svg";
import DoublecheckIcon from "../svg/double-check.svg";
import EditIcon from '../svg/edit.svg';
import { useDispatch } from "react-redux";
import { deleteTodo } from "../Slice/todoSlice";

const ListItem=({todo})=>{
    const dispatch=useDispatch();
   
    const onClickDelete=()=>{
        dispatch(deleteTodo({todoId:todo?.todoId})).unwrap();
    }

    return(
        <div className="todo">
                <div className={`text ${todo.completed ? 'line' : ''}`}>{todo?.title}</div>

                <div className="edit">
                    <img src={EditIcon} alt="edit" />
                </div>

                <div className="tick">
                    <img src={`${todo.completed? DoublecheckIcon : TickIcon}`} alt="tick"
                    />
                </div>
                <div className="trash">
                    <img src={TrashIcon} alt="Trash" onClick={onClickDelete}
                    />
                </div>
            </div>
    )
}

export default ListItem;