/* eslint-disable no-magic-numbers */
export default {
  DATABASE: {
    DIALECT: process.env.DB_DIALECT || 'mysql',
    HOST: process.env.DB_HOST || 'localhost',
    PASSWORD: process.env.DB_PASSWORD || 'pass',
    PORT: process.env.DB_PORT || 3306,
    USERNAME: process.env.DB_USERNAME || 'root',
    NAME: process.env.DB_NAME || 'users',
  },
  PORT: process.env.PORT || 3000,
  CREDIT_MANAGEMENT_URL: process.env.CREDIT_MANAGEMENT_URL || 'http://localhost:3001',
  PARKING_CONTROL_URL: process.env.PARKING_CONTROL_URL || 'http://localhost:3002',
  USERS_URL: process.env.USERS_URL || 'http://localhost:3003',
}
