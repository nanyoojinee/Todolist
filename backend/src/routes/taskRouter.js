import { Router } from "express";
import { taskController } from "../controllers/taskController.js"

const taskRouter = Router();

taskRouter.post("/tasks", taskController.createTask);

// taskRouter.get("/current/tasks", taskController.getTasks);

export { taskRouter };