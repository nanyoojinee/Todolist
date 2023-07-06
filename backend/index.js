import 'dotenv/config'
import { app } from "./src/app.js";
import mysql from "mysql2";

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("MySQL server에 연결되었습니다!")
})

const PORT = process.env.SERVER_PORT || 5000;

app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다.  http://localhost:${PORT}`);
});

