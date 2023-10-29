import { useState } from "react";

function AddTodo({ addTodo }){

    const [todoText, setTodoText] = useState('');
    return (
        <>
        <input placeholder="write about your todo..." onChange={(e) => setTodoText(e.target.value)} value={todoText} />
       <button onClick={() => {
        if(todoText != ''){
            addTodo(todoText)
            setTodoText('');
        }
       }}>Submit</button>
        </>
    )
}

export default AddTodo;