import {Router} from "express";
import {addTodo, deleteTodo, getTodos, getTodoById, updateTodo} from "../controllers/todo";

const router: Router = Router();

router.get("/", getTodos);

router.get("/:id", getTodoById);

router.post("/", addTodo);

router.put("/:id", updateTodo);

router.delete("/:id", deleteTodo);

export default router;
