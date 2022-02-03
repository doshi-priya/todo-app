import React, { useState } from 'react';
import TodoItem from '../components/TodoItem'
import AddTodo from '../components/AddTodo'

function App() {
  const [todos, setTodos] = useState<ITodo[]>([])

  async function getTodos(event: any){
    event.preventDefault();
const response  = await fetch('http://localhost:4000/todos', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'token' : localStorage.getItem('token') as any
  },
})

const data = await response.json();

console.log(data);

  }

  return (
    <main className='App'>
    <h1>My Todos</h1>
   
    <form onSubmit = {getTodos}>
    <input type = "submit" value="Show"/>
      </form>
  </main>
      
  );
}

export default App;
