import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import envVars from './envVars.js';
import express from 'express';
import routes from './routes/users.routes.js';

const app = express(),
  port = envVars.PORT;
app.use(bodyParser.json());
app.use(routes);

dotenv.config();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
