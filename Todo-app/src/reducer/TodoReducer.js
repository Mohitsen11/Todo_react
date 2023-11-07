function TodoReducer(state = [] , action){

    if(action.type == 'add_todo'){
        let nextId = state.length + 1;
        return ([...state , { id : nextId , text : action.payload.todoText, isFinished : false}])
    } else if( action.type == 'edit_todo'){
        const newTodo = state.map((todo) => {
            if(todo.id == action.payload.id){
                todo.text = action.payload.todoText
            }
            return todo;
        })

        return newTodo;
    } else if(action.type == 'delete_todo'){
        const newTodo = state.filter((todo) => todo.id != action.payload.id);
  
        return newTodo;
    } else if(action.type == 'finish_todo'){
        const newTodo = state.map((todo) => {
            if(todo.id == action.payload.id){
                todo.isFinished = action.payload.isFinished
            }

            return todo;
        });

       return newTodo;
    }

    return state;
}

export default TodoReducer;