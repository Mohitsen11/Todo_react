import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";

function TodoList(){

    const {todos , dispatch } = useContext(TodoContext);
    
     function onDeleteTodo(id){
     dispatch({type : 'delete_todo' , payload : {id}});
     }

     function onEditTodo(id , todoText){
       dispatch({type : 'edit_todo' , payload : {id , todoText}});
     }

     function onFinishTodo(id , isFinished){
        dispatch({type : 'finish_todo' , payload : {id , isFinished}});
     }

    return (
        <div>
           {todos &&  todos.map((todo) => <Todo  
                                                id={todo.id}
                                                key={todo.id}
                                                text={todo.text}
                                                isFinished={todo.isFinished}
                                                editTodo={(todoText) => onEditTodo(todo.id , todoText)}
                                                finishedTodo={(isFinished) => onFinishTodo(todo.id , isFinished)}
                                                deleteTodo={() => onDeleteTodo(todo.id)}
            /> )}
        </div>
    )
}

export default TodoList;