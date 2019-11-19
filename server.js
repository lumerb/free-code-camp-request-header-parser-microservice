const express = require('express');
const app = express();
const route = require('./route.js');
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors({
    optionSuccessStatus: 200
}));

app.use(bodyParser.json());
app.use(express.static('public'));

route(app);

app.use(express.static('public'));
app.listen(3000, () => console.log('Listening port 3000'))