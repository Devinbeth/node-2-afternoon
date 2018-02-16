const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const ctrl = require('./controller.js');
require('dotenv').config()

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3005;

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(port, () => console.log(`Server listening on port ${port}.`));
});

app.post('/api/product', ctrl.create);
app.get('/api/products', ctrl.getAll);
app.get('/api/product/:id', ctrl.getOne);
app.put('/api/product/:id', ctrl.update);
app.delete('/api/product/:id', ctrl.delete);
