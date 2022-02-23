/*
1. git init
2. git branch -m master main
3. npm init -y
4. echo "node_modules\n" > .gitignore
5. npm install express
6. code .
*/

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/second', (req, res) => {
    res.send('My Second Page!');
})

app.listen(3000);

/*
7. node index.js (or nodemon)
8. localhost:3000
*/
