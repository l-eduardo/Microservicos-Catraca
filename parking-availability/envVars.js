/* eslint-disable no-magic-numbers */
export default {
  DATABASE: {
    DIALECT: process.env.DB_DIALECT || 'mysql',
    HOST: process.env.DB_HOST || 'localhost',
    PASSWORD: process.env.DB_PASSWORD || 'pass',
    PORT: process.env.DB_PORT || 3306,
    USERNAME: process.env.DB_USERNAME || 'root',
    NAME: process.env.DB_NAME || 'parkingAvailability',
  },
  PORT: process.env.PORT || 3000,
}
