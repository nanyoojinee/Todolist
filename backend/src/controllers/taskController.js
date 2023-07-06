import {taskService } from "../services/taskService.js";

const taskController = {
    createTask: async function(req, res, next) {
        try{
            const { content } = req.body;

            const task = await taskService.createTask({ content });
            res.status(400).send({ task })
        }
    }
}