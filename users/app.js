import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import envVars from './envVars.js';
import express from 'express';
import routes from './routes/users.routes.js';
import setupDbStructure from './database/utils/setupDbStructure.js';

dotenv.config();

try {
  await setupDbStructure()
} catch (error) {
  console.error('Error setting up database structure:', error);
}

const app = express(), port = envVars.PORT;

app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
