import { taskService } from "../services/taskService.js";

const taskController = {
    createTask: async function(req, res, next) {
        try{
            const { content } = req.body;

            const task = await taskService.createTask(content);
            res.status(200).send(task)
        } catch(err){
            next(err)
        }
    },
    getTasks: async (req,res,next) => {
        try{
            const tasks = await taskService.getTasks();
            res.status(200).send(tasks);
        } catch(err){
            next(err)
        }
    }
}

export { taskController };