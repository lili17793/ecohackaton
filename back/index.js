const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const routerAuth = require('./routes/auth');
const routerUser = require('./routes/user');
const routerFact= require('./routes/fact');
const routerChallenge= require('./routes/challenge')
const models = require('./models');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/auth', routerAuth);
app.use('/user', routerUser);
app.use('/fact', routerFact);
app.use('/challenge', routerChallenge);

models.sequelize.sync().then(() => 
    app.listen(port, console.log(`server listening on port ${port}`))
);
