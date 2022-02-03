import React, { useState } from 'react';
import TodoItem from '../components/TodoItem'
import AddTodo from '../components/AddTodo'

function App() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

  async function addTodos(event: any){
    event.preventDefault();
const response  = await fetch('http://localhost:4000/add-todo', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'token' : localStorage.getItem('token') as any,
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    name,
    description,
  }),
})

const data = await response.json();

console.log(data);

  }

  return (
    <div>
      <h1>Add todos</h1>
      <form onSubmit = {addTodos}>
      <input value = {name}
      onChange = {(e) =>setName(e.target.value)}
      type = "text" 
      placeholder='name' />
       <br/>
      <input value = {description}
       onChange = {(e) =>setDescription(e.target.value)}
       type = "text" placeholder='description' />
       <br />
       <input type = "submit" value="Add"/>
      </form>


    </div>
   
  );
}

export default App;
