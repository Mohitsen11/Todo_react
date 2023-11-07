// CSS imports
import './App.css'

import { Provider } from 'react-redux';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList'
import store from './store';

function App() {

  return (
    <>
      <Provider store={store}>
      <AddTodo />
      <TodoList />
      </Provider>
    </>
  )
}

export default App;
