import 'dotenv/config'
import { app } from "./src/app.js";
import mysql from "mysql2";
import dbconfig from './config/dbconfig.js'
const connection = mysql.createConnection(dbconfig);

const PORT = process.env.SERVER_PORT || 5000;

connection.connect(function (err) {
  if (err) throw err;
  console.log("MySQL server에 연결되었습니다!")
})

app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다. z http://localhost:${PORT}`);
});

