import React, { useEffect, useState } from 'react'
import TodoItem from '../components/TodoItem'
import AddTodo from '../components/AddTodo'
import { getTodos, addTodo, deleteTodo, updateTodo} from '../API'


  const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
  
    useEffect(() => {
      fetchTodos()
    }, [])
  
    const fetchTodos = (): void => {
      getTodos()
      // .then(({ data: { todo} }: ITodo[] | any) => setTodos(todos))
      .then((responseData) => {
        const userTodos = responseData.data.user.todos;
        setTodos(userTodos);
      })
      .catch((err: Error) => console.log(err))
    }

    const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
      e.preventDefault()
      addTodo(formData)
        .then(({ status, data }) => {
          if (status !== 201) {
            throw new Error("Error! Todo not saved")
          }
          setTodos(data.todos)
        })
        .catch(err => console.log(err))
    }

    const handleDeleteTodo = (_id: string): void => {
      deleteTodo(_id)
        .then(({ status, data }) => {
          if (status !== 200) {
            throw new Error("Error! Todo not deleted")
          }
          setTodos(data.todos)
        })
        .catch(err => console.log(err))
    }

    const handleUpdateTodo = (todo: ITodo): void => {
      updateTodo(todo)
        .then(({ status, data }) => {
          if (status !== 200) {
            throw new Error("Error! Todo not updated")
          }
          setTodos(data.todos)
        })
        .catch(err => console.log(err))
    }

  return (
    <main className='App'>
      <h1>My Todos</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {todos.map((obj) => (
        <TodoItem
          key={obj._id}

          todo={obj} 
          updateTodo={handleUpdateTodo }  
          deleteTodo={handleDeleteTodo}
             //todo={obj}   
            />
      ))}
    </main>
  )
}

export default App

