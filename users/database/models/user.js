import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';

const passwordMaxLen = 255,
 passwordMinLen = 8;

class User extends Model {}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  category: {
      allowNull: false,
      type: DataTypes.ENUM,
      values: ["Estudante", "Tae", "Professor", "Visitante"],
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [passwordMinLen, passwordMaxLen],
      }
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    modelName: 'User',
    sequelize,
    tableName: 'USERS',
  },
);

export default User;
