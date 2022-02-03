import { Router } from "express";
import { signUp , login , auth} from "../controllers/users";
import { getTodos, addTodo, deleteTodo } from "../controllers/todo";
import awt from "../common/toolbox/middleware/auth";

const router: Router = Router();

//router.get("/todos", getTodos);
router.post("/signup", signUp);

router.post("/login", login);

router.get("/me", awt, auth);

export default router;