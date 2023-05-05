import app from './app.js'
import { sequelize } from './database/database.js'

async function main() {
  try {
    await sequelize.sync({ force: false })
    console.log('Connection has been established successfully.')

    app.listen(4000)
    console.log('server is listening in port', 4000)
  } catch (error) {
    console.error('Unable to connect to de database:', error)
  }
}

main()
