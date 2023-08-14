import React, {useContext} from "react";
import '../css/form.css';
import BanIcon from '../svg/ban.svg';

const Form=()=>{
    
    return(
            <form>
                <div className="input-container">
                    <div className="input-div">
                    <input type='text'placeholder='make a task'

                    />
                    </div>

                    <div className='plus-btn'>
                        <button> + </button>
                    </div>

                    <div className="ban">
                        <img src={BanIcon} alt="ban" />
                    </div>

                </div>
            </form>
    )
    
}

export default Form;