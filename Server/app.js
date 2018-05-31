const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const data = require('./data');
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.text({ defaultCharset: 'utf-8' }));
require('./express').init(app);
require('./routes').init(app, data);
app.listen(3000, () => console.log('Example app listening on port 3000!'))