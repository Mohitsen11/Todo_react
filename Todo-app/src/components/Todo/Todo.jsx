import { useState } from "react";

function Todo({id , text , isFinished , deleteTodo , editTodo , finishedTodo}){

    const [isEditiing , setIsEditting] = useState(false);
    const [todoText , setTodoText] = useState(text);

    return (
        <div>
            <input type="checkbox" checked={isFinished} onChange={() => finishedTodo(!isFinished)} />
            {isEditiing ? <input value={todoText} onChange={(e) => setTodoText(e.target.value)}/> : <span>{todoText}</span>}
            <button onClick={(todoText) => {
                setIsEditting(!isEditiing)
                editTodo(todoText)}}>{isEditiing ? 'Save' : 'Edit'}</button>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}

export default Todo;