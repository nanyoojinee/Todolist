import 'dotenv/config'
import mysql from "mysql2";

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  };

const connection = mysql.createConnection(dbConfig);

connection.connect(function (err) {
    if (err) throw err;
    console.log("MySQL server에 연결되었습니다!")
  })

// `query` 메서드를 가진 `db` 객체 생성
const db = {
    query: (sql, values) => {
      return new Promise((resolve, reject) => {
        connection.query(sql, values, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
    },
  };

export default db;
  