import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import SignUp from './pages/signup'
// import Dashboard from './pages/Dashboard'

const App = () => {
	return (
		<div>
			<BrowserRouter>
      <Routes>
      <Route path="/login" element ={<Login/>}/> 
      <Route path="/signup" element ={<SignUp/>}/> 
      </Routes>	
			</BrowserRouter>
		</div>
	)
}

export default App