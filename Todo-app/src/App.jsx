// CSS imports
import { useState } from 'react';
import './App.css'
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList'

function App() {

  const [todos , setTodos] = useState([
    ]);

    function addTodo(todoText){
      let nextId = todos.length + 1;

      setTodos([... todos , {id : nextId , text : todoText , isFinished : false}]);
    }

  return (
    <>
      <AddTodo addTodo={addTodo}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App
