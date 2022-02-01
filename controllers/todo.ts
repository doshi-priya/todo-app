import { Response, Request } from "express";
import { ITodo } from "../types/todo";
import Todo from "../models/todo";
import { IUsers } from "../types/users";
import Users from "../models/users";

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const username: string  = req.params.username;
    let user  = await Users.findOne({username});
    //console.log(user);
    const todo = await user?.todos;
    // const todo: ITodo[] = await user?.todos;
     res.status(200).json({ todo});
  } catch (error) {
    throw error;
  }
}

const addTodo = async (req: Request, res: Response): Promise<void> => {
    try {
       const username: string  = req.params.username;
     let user  = await Users.findOne({username});

      const body = req.body as Pick<ITodo, "name" | "description" | "status">
  
      const todo = new Todo({
        name: body.name,
        description: body.description,
        status: body.status,
      })
    
      const newTodo = todo.save();
      const test : any = user?.todos;
      test.push(todo);
      //test.save();
      user?.save();
      const allTodos = await user?.todos;
  
      res
        .status(201)
        .json({ message: "Todo added", todo: newTodo, todos: allTodos })
    } catch (error) {
      throw error
    }
  }


  const updateTodo = async (req: Request, res: Response): Promise<void> => {
    try {
      const username: string  = req.params.username;
      let user  = await Users.findOne({username});
      const {
        params: { id },
        body,
      } = req
      const todo : any= user?.todos;
      const updateTodo= await todo.findByIdAndUpdate(
        { _id: id },
        body
      )
      const allTodos = await user?.todos;
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
    try {
      const username: string  = req.params.username;
      let user  = await Users.findOne({username});
      const todo : any= user?.todos;
      const deletedTodo = await todo.findByIdAndRemove(
        req.params.id
      )
      const allTodos = await user?.todos;
      res.status(200).json({
        message: "Todo deleted",
        todo: deletedTodo,
        todos: allTodos,
      })
    } catch (error) {
      throw error
    }
  }
  
  export { getTodos, addTodo, updateTodo, deleteTodo }