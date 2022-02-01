import { Router } from "express";
import { signUp , login , auth} from "../controllers/users";
import awt from "../middleware/auth";

const router: Router = Router();

router.post("/signup", signUp);

router.post("/login", login);

router.get("/me", awt, auth);

export default router;