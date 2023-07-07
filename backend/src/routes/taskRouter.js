import { Router } from "express";
import { taskController } from "../controllers/taskController.js"

const taskRouter = Router();

taskRouter.post("/tasks", taskController.createTask);

taskRouter.get("/tasks", taskController.getTasks);

export { taskRouter };