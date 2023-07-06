import cors from "cors";
import express from "express";

const app = express();

app.use(cors());

app.get('/', (req, res)=>{
    res.send('유진은석의 투두')
})

export { app };