import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import envVars from './envVars.js';
import express from 'express';
import routes from './routes/gate_control.routes.js';

dotenv.config();

const app = express(),
  port = envVars.PORT;
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
