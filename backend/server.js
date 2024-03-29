const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const IDSet = new Set();

const app = express();
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'signup'
})
const id = () => {
    let x;
    do {
        x = Math.floor(Math.random() * 1001);
    } while (IDSet.has(x)); 

    IDSet.add(x);
    return x;
};
app.post('/signup', (req, res) => { 
    const sql = "INSERT INTO login (id, name, email, password) VALUES (?)";
    const values = [
        id(),
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    })
});
app.post('/login', (req, res) => { 
    const sql = 'SELECT * FROM login WHERE email = ? and password = ?';
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json('Success');
        }
        else{
            return res.json("Failed");
        }
    })
});

app.listen(8081, () => { 
    console.log("Listening...")
})