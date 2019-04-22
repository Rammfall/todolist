const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const Users = require('./routes/Users');
const Projects = require('./routes/Projects');
const Tasks = require('./routes/Tasks');

// Render static files

router.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

// Defining all routes

app.use('/users', Users);
app.use('/projects', Projects);
app.use('/tasks', Tasks);
app.use('/', router);
app.use('/static', express.static('./client/build/static'));
app.use('/', express.static('./client/build/'));

app.listen(port, () => {
  /* eslint-disable no-console */

  console.log(`Server is running on port: ${port}`);

  /* eslint-enable no-console */
});
