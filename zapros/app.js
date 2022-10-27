const express = require('express'),
        app = express();
        router = express.Router()

const host = '127.0.0.1';
const port = 3000;
    


router.get('/books', (req, res) => {
    console.log(req.url);
});

app.use('/api', router);

app.listen(port, host, () => console.log(`Server listens http://${host}:${port}`));
