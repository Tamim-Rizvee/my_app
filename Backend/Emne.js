import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tamim443',
    database: 'test'
});

app.get('/api/foss', (req, res) => {
    db.query('SELECT * FROM info', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(results);
    });
});

app.post('/api/foss', (req, res) => {
    const { id, name } = req.body;
    db.query('INSERT INTO info (id, name) VALUES (?, ?)', [id, name], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database insert failed' });
        }
        res.json({ id, name });
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});