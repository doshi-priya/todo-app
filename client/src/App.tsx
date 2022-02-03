import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import Todo from './components/TodoItem'
import Login from './pages/login'
import SignUp from './pages/signup'
import Todo from './pages/todo'
import AddTodos from './pages/add-todo'
// import Dashboard from './pages/Dashboard'

const App = () => {
	return (
		<div>
			<BrowserRouter>
      <Routes>
      <Route path="/login" element ={<Login/>}/> 
      <Route path="/signup" element ={<SignUp/>}/> 
	  <Route path="/todo" element ={<Todo/>}/> 
	  <Route path="/add-todo" element ={<AddTodos/>}/> 
      </Routes>	
			</BrowserRouter>
		</div>
	)
}

export default App