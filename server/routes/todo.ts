import { Router } from "express";
import { getTodos, addTodo, deleteTodo } from "../controllers/todo";
import awt from "../common/toolbox/middleware/auth";

const router: Router = Router();

router.get("/todos",awt, getTodos);

router.post("/:username/add-todo", addTodo);

// router.put("/:username/edit-todo/:id", updateTodo);

router.delete("/:username/delete-todo/:id", deleteTodo);

export default router;