import { useState } from 'react'
import { Header } from './components/Header'
import { Todo } from './components/Todo'

import './global.css'

function App() {
  const [completedTodos, setCompletedTodos] = useState([])
  const [newTodoText, setNewTodoText] = useState('')
  const [todos, setTodos] = useState([])

  function handleCreateNewTodoTextChange(e) {
    setNewTodoText(e.target.value)
  }

  function handleCreateNewTodo(e) {
    e.preventDefault()
    const createTodo = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        content: newTodoText,
        isCompleted: false
      },
    ]
    setTodos(createTodo)
    setNewTodoText('');
  }

  function handleDeleteTodo(deleteTodo) {
    const todosWithOutDeleteOne = todos.filter((todo) => {
      return todo.id !== deleteTodo.id
    })
    setTodos(todosWithOutDeleteOne)
  }

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);

    const updatedCompletedTodos = updatedTodos.filter(todo => todo.isCompleted);
    setCompletedTodos(updatedCompletedTodos);
  };



  return (
    <>
    <Header />
    <div className="wrapper">
      <main className="content">
        <form className='todoForm' onSubmit={handleCreateNewTodo}> 
          <input 
            type='text' 
            placeholder='Adicione uma nova tarefa' 
            onChange={handleCreateNewTodoTextChange} 
            value={newTodoText}
          />
          <button type='submit'>Criar Tarefa</button>
        </form>

        <div className="todoList">
          <header className="todoList-header">
            <div className="todoList-info">
              <p className="createdTasks">Tarefas Criadas</p>
              <span className="counter">{todos.length}</span>
            </div>
            <div className="todoList-info">
              <p className="completedTasks">Concluídas</p>
              <span className="counter">{completedTodos.length} de {todos.length}</span>
            </div>
          </header>

          <div className="todos-container">
            {todos.map((todo) => (
              <Todo key={todo.id} todo={todo} onDelete={handleDeleteTodo} onToggle={handleToggleTodo}/>
            ))}
          </div>
        </div>
      </main>
    </div>
    </>
  )
}

export default App