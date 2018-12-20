const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const routerAuth = require('./routes/auth')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/auth', routerAuth);

app.listen(port, console.log(`server listening on port ${port}`));