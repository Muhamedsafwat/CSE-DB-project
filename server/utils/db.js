import mysql from "mysql2";

export const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "safwat911",
    database: "notes_app",
  })
  .promise();
