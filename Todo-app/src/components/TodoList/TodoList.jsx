import Todo from "../Todo/Todo";

function TodoList({ todos , setTodos }){
    
     function onDeleteTodo(id){
     const newTodo = todos.filter((todo) => todo.id != id);
  
     setTodos(newTodo);
     }

     function onEditTodo(id , todoText){
        const newTodo = todos.map((todo) => {
            if(todo.id == id){
                todo.text = todoText
            }
            return todo;
        })

        setTodos(newTodo);
     }

     function onFinishTodo(id , isFinished){
        const newTodo = todos.map((todo) => {
            if(todo.id == id){
                todo.isFinished = isFinished
            }

            return todo;
        });

        setTodos(newTodo);
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