const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const Users = require('./routes/Users');
const Projects = require('./routes/Projects');
const Tasks = require('./routes/Tasks');

app.use('/users', Users);
app.use('/projects', Projects);
app.use('/tasks', Tasks);

app.listen(port, () => {
  /* eslint-disable no-console */

  console.log(`Server is running on port: ${port}`);

  /* eslint-enable no-console */
});
