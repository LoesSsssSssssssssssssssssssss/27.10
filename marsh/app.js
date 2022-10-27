const express = require('express'),
        app = express();

const host = '127.0.0.1';
const port = 3000;


app.route('/api/users')
    .get((req, res) => {res.send('get')})
    .post((req, res) => {res.send('post')})
    .put((req, res) => {rest.send('put')})
    .delete((req, res) => {res.send('delete')});

app.listen(port, host, () => console.log(`Server listens http://${host}:${port}`));
