import './App.css'

import TodoItem from './components/TodoItem/TodoItem'
import AddTodo from './components/AddTodo/AddTodo'

function App() {
  const todos = [
    { todo: 'Köp kaffe', done: false },
    { todo: 'Köp kaka', done: false },
    { todo: 'Brygg kaffe', done: false },
    { todo: 'Drick kaffe', done: false },
    { todo: 'Koda React', done: false }
  ]

  const todoComponents = todos.map((todo) => {
    return <TodoItem todo={ todo.todo } done={ todo.done } />
  });

  return (
    <div className="App">
      <ul className='todos'>
        { todoComponents }
      </ul>
      <AddTodo />
    </div>
  )
}

export default App
