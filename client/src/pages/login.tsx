import React, { useState } from 'react';


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function loginUser(event: any){
    event.preventDefault();
const response  = await fetch('http://localhost:4000/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    username,
    password,
  }),
})

const data = await response.json();
if(data.user){
   localStorage.setItem('token', data.user);
  alert('Login Succesful');
 window.location.href='/todos';
}
else{
  alert('Check your username and password');
}
console.log(data);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit = {loginUser}>
      <input value = {username}
      onChange = {(e) =>setUsername(e.target.value)}
      type = "text" 
      placeholder='user' />
       <br/>
      <input value = {password}
       onChange = {(e) =>setPassword(e.target.value)}
       type = "password" placeholder='password' />
       <br />
       <input type = "submit" value="Login"/>
      </form>


    </div>
      
  );
}

export default App;
