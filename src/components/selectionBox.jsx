
import { useDispatch } from 'react-redux';
import '../css/selectionBox.css';
import { updateCompletedStatus } from '../Slice/todoSlice';

const Selectionbox=()=>{
    const dispatch= useDispatch();

    const updateStatus=(e)=>{
        const status = e.target.value;
        dispatch(updateCompletedStatus(status));
    }
    
    return(
        <select onClick={updateStatus}className="select">
            <option>All</option>
            <option>Completed</option>
            <option>Uncompleted</option>
        </select>
    )
}

export default Selectionbox;
