import { Router } from "express";
import { getTodos, addTodo, deleteTodo, updateTodo } from "../controllers/todo";
import awt from "../common/toolbox/middleware/auth";

const router: Router = Router();

router.get("/todos", awt , getTodos);

router.post("/add-todo", awt, addTodo);

 router.put("/edit-todo/:id",awt, updateTodo);

router.delete("/delete-todo/:id", awt, deleteTodo);

export default router;