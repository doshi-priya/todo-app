import React, { useState } from 'react';


function App() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(event: any){
    event.preventDefault();
const response  = await fetch('http://localhost:4000/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    username,
    email,
    password,
  }),
})

const data = await response.json();
console.log(data);
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit = {registerUser}>
      <input value = {username}
      onChange = {(e) =>setUserName(e.target.value)}
      type = "text" 
      placeholder='username' />
      <br/>
      <input value = {email}
      onChange = {(e) =>setEmail(e.target.value)}
      type = "text" 
      placeholder='email' />
       <br/>
      <input value = {password}
       onChange = {(e) =>setPassword(e.target.value)}
       type = "password" placeholder='password' />
       <br />
       <input type = "submit" value="Register"/>
      </form>
    

    </div>
      
  );
}

export default App;
