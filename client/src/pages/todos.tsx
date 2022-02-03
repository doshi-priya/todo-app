import React, { useEffect, useState } from 'react'
import TodoItem from '../components/TodoItem'
import AddTodo from '../components/AddTodo'
import { getTodos, addTodo} from '../API'

const App: React.FC = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    fetchTodos()
  }, []);

  const fetchTodos = (): void => {
   
    getTodos()
    .then(({ data: { todos } }) => setTodos(todos as any))
    .catch((err: Error) => console.log(err))
  }

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
    e.preventDefault()
    addTodo(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Todo not saved")
        }
        setTodos(data.todos as any)
      })
      .catch(err => console.log(err))
  }

  return (
    <main className='App'>
      <h1>My Todos</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {/* {todos.map((todo) => (
        <TodoItem
          key={todo._id}

          todo={todo} updateTodo={function (todo: ITodo): void {
            throw new Error('Function not implemented.')
          } } deleteTodo={function (_id: string): void {
            throw new Error('Function not implemented.')
          } }        />
      ))} */}
    </main>
  )
}

export default App

