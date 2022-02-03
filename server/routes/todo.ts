import { Router } from "express";
import { getTodos, addTodo, deleteTodo } from "../controllers/todo";
import awt from "../common/toolbox/middleware/auth";

const router: Router = Router();

router.get("/todos", awt , getTodos);

router.post("/add-todo", awt, addTodo);

// router.put("/:username/edit-todo/:id", updateTodo);

router.delete("/delete-todo/:id", deleteTodo);

export default router;