import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

function AddTodo({ addTodo }){

    const {todos , setTodos } = useContext(TodoContext);

    const [todoText, setTodoText] = useState('');
    return (
        <>
        <input placeholder="write about your todo..." onChange={(e) => setTodoText(e.target.value)} value={todoText} />
       <button onClick={() => {
        if(todoText != ''){
            let nextId = todos.length + 1;
            setTodos([...todos , { id : nextId , text : todoText, isFinished : false}])
            setTodoText('');
        }
       }}>Submit</button>
        </>
    )
}

export default AddTodo;