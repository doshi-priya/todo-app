
import axios, { AxiosResponse } from "axios"

//const baseUrl: string = "http://localhost:4000"

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      'http://localhost:4000/todos', {
headers: {
  'Content-Type': 'application/json',
  'token' : localStorage.getItem('token') as any,
  'Accept': 'application/json'
}
      }
    )
    return todos
  } catch (error) {
    throw new Error(error as any)
  }
}
export const addTodo = async (
  formData: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo = {
      name: formData.name,
      description: formData.description,
      status: false,
    }
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      'http://localhost:4000/add-todo',
      {headers: {
          'Content-Type': 'application/json',
          'token' : localStorage.getItem('token') as any,
          'Accept': 'application/json'
        }
      },
      todo as any
    )
    return saveTodo
  } catch (error) {
    throw new Error(error as any )
  }
}

// export const addTodo = async function (formData: ITodo){
// const response  = await fetch('http://localhost:4000/add-todo', {
// method: 'POST',
// headers: {
//   'Content-Type': 'application/json',
//   'token' : localStorage.getItem('token') as any,
//   'Accept': 'application/json'
// },
// body: JSON.stringify({
//   name : formData.name,
//   description : formData.description,
//   status : false
// }),
// })

// const data = await response.json();
// console.log(data);
// return data;

// }
// export async function getTodos(){
//   //event.preventDefault();
// const response  = await fetch('http://localhost:4000/todos', {
// method: 'GET',
// headers: {
//   'Content-Type': 'application/json',
//   'token' : localStorage.getItem('token') as any,
//   'Accept': 'application/json'
// },
// })

// const data = await response.json();

// console.log();
// return data;

// }
