/*
1. git init
2. git branch -m master main
3. npm init -y
4. echo "node_modules\n" > .gitignore
5. npm install express
6. code .
*/

require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/two', (req, res) => {
    res.send('PAGE TWO');
})

app.get('/research/:animal', (req, res) => {
    res.send(`research ${req.params.animal}`);
})

app.listen(process.env.PORT);

/*
7. node index.js (or nodemon)
8. localhost:3000
9. npm install dotenv
10. echo "PORT = 3000" > .env
*/
