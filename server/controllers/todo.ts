import { Response, Request } from "express";
import { ITodo } from "../common/toolbox/types/todo";
import Todo from "../common/toolbox/models/todo";
import { IUsers } from "../common/toolbox/types/users";
import Users from "../common/toolbox/models/users";
import jwt from 'jsonwebtoken';

const getTodos = async (req: Request, res: Response) => {
  try {
   
    const user = await Users.findById(req.user.id).populate("todos", "name description status");
    
     const todo = await user?.todos;
  
     res.status(200).json({ user});
  } catch (error) {
    throw error;
  }
}

const addTodo = async (req: Request, res: Response): Promise<void> => {
    try {
      //  const username: string  = req.params.username;
      //  let user  = await Users.findOne({username}).populate("todos", "name description status");
       
      const user = await Users.findById(req.user.id);
    
      const body = req.body as Pick<ITodo, "name" | "description" | "status">;
      
      const todo = new Todo({
        name: body.name,
        description: body.description,
        status: body.status,
      })
    
      todo.save();
      const test : any = user?.todos;
      test.push(todo);
      //test.save();
      user?.save();
      const allTodos = await user?.todos;
  
      res
        .status(201)
        .json({ message: "Todo added", todos: allTodos })
    } catch (error) {
      throw error
    }
  }


  // const updateTodo = async (req: Request, res: Response): Promise<void> => {
  //   try {
  //     const username: string  = req.params.username;
  //     let user  = await Users.findOne({username}).populate("todos", "name description status");
  //     const id = req.params._id;
  //     const todo : any= user?.todos;

  //     const objIndex = todo.findIndex(((obj: { id: string; }) => obj.id == id));
  //     const body = req.body as Pick<ITodo, "name" | "description" | "status">;
  //     todo[objIndex].name = body.name;
  //     todo[objIndex].description = body.description;
  //     todo[objIndex].status = body.status;
  //     // let obj = todo.find((o: { _id: string; }) => o._id === id);
  //     // const updateTodo= await todo.findByIdAndUpdate(
  //     //   { _id: id },
  //     //   body
  //     // )
  //     user?.save();
  //     const allTodos = await user?.todos;
  //     res.status(200).json({
  //       message: "Todo updated",
  //       todos: allTodos,
  //     })
  //   } catch (error) {
  //     throw error
  //   }
  // }

  const updateTodo = async (req: Request, res: Response): Promise<void> => {
    try {
      const {
        params: { id },
        body,
      } = req
      const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
        { _id: id },
        body
      )
      const allTodos: ITodo[] = await Todo.find()
      res.status(200).json({
        message: "Todo updated",
        todo: updateTodo,
        todos: allTodos,
      })
    } catch (error) {
      throw error
    }
  }

  const deleteTodo = async (req: Request, res: Response): Promise<void> => {
    try{
    const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(
      req.params.id
    )
    const allTodos: ITodo[] = await Todo.find()
    res.status(200).json({
      message: "Todo deleted",
      todo: deletedTodo,
      todos: allTodos,
    })
  } catch (error) {
    throw error
  }
}
  
  export { getTodos, addTodo, deleteTodo, updateTodo }


