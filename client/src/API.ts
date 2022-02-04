
import axios, { AxiosResponse } from "axios"



export const getTodos = async () => {
  try {
    const todo = await axios.get(
      'http://localhost:4000/todos', {
headers: {
  'Content-Type': 'application/json',
  'token' : localStorage.getItem('token') as any,
  'Accept': 'application/json'
}
      }
    )
    console.log(todo);
    return todo;
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
    console.log(todo);
    return saveTodo
  } catch (error) {
    console.log(error);
    throw new Error(error as any )
  }
}


export const deleteTodo = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
      `http://localhost:4000/delete-todo/${_id}`,
      {headers: {
        'Content-Type': 'application/json',
        'token' : localStorage.getItem('token') as any,
        'Accept': 'application/json'
      }
    }
    )
    return deletedTodo as any;
  } catch (error) {
    throw new Error(error as any)
  }
}

export const updateTodo = async (
  todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todoUpdate: Pick<ITodo, "status"> = {
      status: true,
    }
    const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
      `$http://localhost:4000/edit-todo/${todo._id}`,
      todoUpdate
    )
    console.log(updateTodo);
    return updatedTodo
  } catch (error) {
    throw new Error(error as any)
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
// const req = await fetch('http://localhost:4000/todos', {
// method: 'GET',
// headers: {
//   'Content-Type': 'application/json',
//   'token' : localStorage.getItem('token') as any,
//   'Accept': 'application/json'
// },
// });

// const data = await req.json();

// console.log(data);
// return data;

// }
