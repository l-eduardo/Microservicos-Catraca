import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';


class Credits extends Model {}

Credits.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  credits: {
    allowNull: false,
    primaryKey: false,
    type: DataTypes.INTEGER,
  }
  },
  {
    createdAt: false,
    updatedAt: false,
    modelName: 'Credits',
    sequelize,
    tableName: 'CREDITS',
  },
);

export default Credits;
