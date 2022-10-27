const express = require('express'),
        router = express.Router(),
        app = express();

const host = '127.0.0.1';
const port = 3000;
    

app.get('/image', (req, res) => {
    return res.status(200).download('assets/images/A2.jpg')
  })

app.listen(port, host, () => console.log(`Server listens http://${host}:${port}`));
