import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';


class ParkingAvailability extends Model {}

ParkingAvailability.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  totalParkingSpaces: {
    allowNull: false,
    primaryKey: false,
    type: DataTypes.INTEGER,
  },
  availableParkingSpaces: {
    allowNull: false,
    primaryKey: false,
    type: DataTypes.INTEGER,
  },

  },
  {
    createdAt: false,
    updatedAt: false,
    modelName: 'ParkingAvailability',
    sequelize,
    tableName: 'PARKING_AVAILABILITY',
  },
);

export default ParkingAvailability;
