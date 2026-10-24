const express = require('express');

const app = express();
const port = 8080;

app.listen(port);
app.use(express.static('public'));

console.log(`listening to port ${port}`);

// routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
})

app.get('/contact-me', (req, res) => {
    res.sendFile(__dirname + '/views/contact-me.html')
})

app.use((req, res) => {
    res.sendFile(__dirname + '/views/404.html');
    res.statusCode = 404;
})