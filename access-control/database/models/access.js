import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';

const passwordMaxLen = 255,
 passwordMinLen = 8;

class Access extends Model {}

Access.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    operation: {
      allowNull: true,
      type: DataTypes.ENUM,
      values: ["Entrada", "Saida"]
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    parkId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    initialAutoIncrement: 1,
    createdAt: false,
    updatedAt: false,
    modelName: 'Access',
    sequelize,
    tableName: 'ACCESS_LOGS',
  },
);

export default Access;
