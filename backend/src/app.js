import cors from "cors";
import express from "express";

import { taskRouter } from "./routes/taskRouter.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res)=>{
    res.send('유진은석의 투두')
})

app.use(taskRouter);


export { app };