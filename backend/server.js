const express = require('express');
const cors = require('cors');
const pool = require('./databasepg');
const app = express();

app.use(express.json());
app.use(cors());
pool.connect();
app.post("/Register", async (req, res) => {
    const { username, email, password } = req.body;
    console.log(username, email, password);

    try {
        const insertUser = await pool.query(
            `INSERT INTO "users" ("username", "email", "password") VALUES ($1, $2, $3)`, 
            [username, email, password]
        );
        console.log(insertUser);
        res.send("User Registered Successfully");
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3000, () => console.log("Server running on localhost:3000"));