import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Task } from './task.js'

export const Proyect = sequelize.define(
  'proyects',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING },
    priority: { type: DataTypes.INTEGER },
    description: { type: DataTypes.STRING },
  },
  { timestamps: true }
)

Proyect.hasMany(Task, {
  foreignKey: 'proyectId',
  sourceKey: 'id',
})

Task.belongsTo(Proyect, {
  foreignKey: 'proyectId',
  targetId: 'id',
})