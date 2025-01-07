const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors'); 

const app = express();

app.use(cors());
  
app.use(bodyParser.json());

const pool = new Pool({
  host: 'db', 
  user: 'postgres',
  password: 'postgres',
  database: 'library',
});

app.get('/', (req, res) => {
  res.send('Welcome to the Library API! It is working');
});

app.get('/api/books', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM books');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post('/api/books', async (req, res) => {
  const { title, author } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO books (title, author) VALUES ($1, $2) RETURNING *',
      [title, author]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(3001, () => console.log('Backend running on port 3001'));
