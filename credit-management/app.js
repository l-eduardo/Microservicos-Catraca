import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import envVars from './envVars.js';
import express from 'express';
import routes from './routes/credits.routes.js';
import setupDbStructure from './database/utils/setupDbStructure.js';

dotenv.config();

const app = express(),
  port = envVars.PORT;
app.use(bodyParser.json());
app.use(routes);

try {
  await setupDbStructure()
} catch (error) {
  console.error('Error setting up database structure:', error);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
