import { Router } from "express";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers/todo";

const router: Router = Router();

router.get("/:username/todos", getTodos);

router.post("/:username/add-todo", addTodo);

router.put("/:username/edit-todo/:id", updateTodo);

router.delete("/:username/delete-todo/:id", deleteTodo);

export default router;