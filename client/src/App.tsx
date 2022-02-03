import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import Todo from './components/TodoItem'
import Login from './pages/login'
import SignUp from './pages/signup'
import Todos from './pages/todos'
// import Dashboard from './pages/Dashboard'

const App = () => {
	
	return (
		<div>
			<BrowserRouter>
      <Routes>
      <Route path="/login" element ={<Login/>}/> 
      <Route path="/signup" element ={<SignUp/>}/> 
	  <Route path="/todos" element ={<Todos/>}/> 
      </Routes>	
			</BrowserRouter>
		</div>
	)
}

export default App