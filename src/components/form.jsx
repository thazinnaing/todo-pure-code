import React, {useContext} from "react";
import '../css/form.css';
import BanIcon from '../svg/ban.svg';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../Slice/todoSlice";


const Form=()=>{
    const dispatch=useDispatch();

    const [title, setTitle] = useState("");

    const onChangedTitle=(e)=>{
        console.log(e.target.value);
        setTitle(e.target.value);
    }
    const onClickAddButton=(e)=>{
        
        e.preventDefault();

        dispatch(addNewTodo(title)).unwrap();
        setTitle("");
    }


    return(
            <form>
                <div className="input-container">
                    <div className = "input-div">

                    <input type='text'
                        placeholder='make a task'
                        value = {title}
                        onChange={onChangedTitle}
                    />
                    </div>

                    <div className='plus-btn'>
                        <button onClick={onClickAddButton}> + </button>
                    </div>

                    <div className="ban">
                        <img src={BanIcon} alt="ban" />
                    </div>

                </div>
            </form>
    )
    
}

export default Form;