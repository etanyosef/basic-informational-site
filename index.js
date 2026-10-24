const express = require('express');

const app = express();
const port = 8080;

app.listen(port);
app.use(express.static('public'));

console.log(`listening to port ${port}`);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})