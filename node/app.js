const express = require("express");
const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const mysql = require("mysql");
const pool = mysql.createPool(config);

const sql = `INSERT INTO people(name) values('John')`;
pool.query(sql);

app.get('/', (req, res) => {
  pool.getConnection((err, connection) => {
    if(err){
      console.error('Error getting mysql connection: ', err);
      res.status(500).send("Internal Server Error");
      return;
    }

    connection.query("SELECT * FROM people", (queryError, results) => {
      connection.release();

      if(queryError){
        res.status(500).send('Internal Server Error');
        return;
      }

      res.send(`
        <h1>Full Cycle Rock </h1> 
        <h1>${results.map(result => result.name).join(", ")}</h1>`
      );
    })
  })
})

app.listen(port, () => {
  console.log(`Escutando ${port}`);
})
