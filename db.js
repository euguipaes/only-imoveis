import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kaponne2807@",
  database: "onlyimoveis",
});
