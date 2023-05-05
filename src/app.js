import express from 'express'
import proyectsRoutes from './routes/proyects.routes.js'
import tasksRoutes from './routes/tasks.routes.js'
import morgan from 'morgan'

const app = express()
app.use(express.json())
app.use(morgan('dev'))

app.use(proyectsRoutes)
app.use(tasksRoutes)

export default app
