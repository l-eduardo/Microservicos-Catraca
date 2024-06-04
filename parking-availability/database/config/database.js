import Sequelize from 'sequelize';
import envVars from '../../envVars.js';

const sequelize = new Sequelize({
  dialect: envVars.DATABASE.DIALECT,
  host: envVars.DATABASE.HOST,
  password: envVars.DATABASE.PASSWORD,
  port: envVars.DATABASE.PORT,
  username: envVars.DATABASE.USERNAME,
  database: envVars.DATABASE.NAME,
});

export default sequelize;
