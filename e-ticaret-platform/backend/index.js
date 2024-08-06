const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'exampleuser',
  host: 'db',
  database: 'exampledb',
  password: 'examplepass',
  port: 5432,
});

app.get('/', (req, res) => {
  pool.query('SELECT NOW()', (err, result) => {
    if (err) {
      res.status(500).send(err.toString());
    } else {
      res.send(`Backend servisi çalışıyor. Şu anki zaman: ${result.rows[0].now}`);
    }
  });
});

app.listen(port, () => {
  console.log(`Backend servisi ${port} portunda çalışıyor`);
});
