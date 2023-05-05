import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
  'proyectsdb','postgres','1159432949',{
    host: 'localhost',
    dialect: 'postgres'
  }
)


