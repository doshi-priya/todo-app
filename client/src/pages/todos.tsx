import React, {useEffect} from 'react'
//import TodoItem from '../components/TodoItem'
//import AddTodo from './components/AddTodo'
//import { getTodos } from '../API'
import jwt from 'jsonwebtoken';
import { useNavigate } from 'react-router-dom';

const Todo = () => {
    const nevigate = useNavigate();
    async function fetchTodos(){
        const req = await fetch('http://localhost:4000/todos', {
            headers:{
                'x-access-token' : localStorage.getItem('token') as any,
            },
        })
        const data = req.json();
        console.log(data);
    }
  //const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const token = localStorage.getItem('token') ;
    if(token){
        const user = jwt.decode(token);
        if(!user){
            localStorage.removeItem('token');
            nevigate('/login');
        }else{
    fetchTodos();
        }
    }

  }, []);

//   const fetchTodos = (): void => {
//     getTodos()
//     .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
//     .catch((err: Error) => console.log(err))
//   }
  return (
    <main className='App'>
      <h1>My Todos</h1>
{/*       
      {todos.map((todo: ITodo) => (
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

export default Todo;


