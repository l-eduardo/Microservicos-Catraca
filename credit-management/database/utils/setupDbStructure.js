import envVars from '../../envVars.js';
import mysql from 'mysql2/promise';
import sequelize from '../config/database.js';

const syncDatabaseTables = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Database synchronized.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
},

 setupDbStructure = async () => {
  const connection = await mysql.createConnection({
    host: envVars.DATABASE.HOST,
    user: envVars.DATABASE.USERNAME,
    password: envVars.DATABASE.PASSWORD,
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${envVars.DATABASE.NAME}\`;`);
  await connection.end();

  await syncDatabaseTables();
};

export default setupDbStructure;


