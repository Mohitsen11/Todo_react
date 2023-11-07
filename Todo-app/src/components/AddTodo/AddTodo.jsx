import { useState } from "react";
import {useDispatch } from 'react-redux';
import "./AddTodo.css";

function AddTodo(){

    const dispatch = useDispatch();

    const [todoText, setTodoText] = useState('');

    function addTodo(todoText){
        dispatch({type : 'add_todo' , payload : {todoText}})
    }

    return (
        <>
        <input placeholder="write about your todo..." onChange={(e) => setTodoText(e.target.value)} value={todoText} />
       <button className="submit-btn" onClick={() => {
        if(todoText != ''){
            addTodo(todoText)
            setTodoText('');
        }
       }}>Submit</button>
        </>
    )
}

export default AddTodo;