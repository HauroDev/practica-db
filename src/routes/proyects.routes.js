import { Router } from 'express'
import {
  getProyects,
  createProyects,
  getProyectTasks,
  updateProyect,
  deleteProyect,
  getProyect,
} from '../controllers/proyects.controller.js'
const router = Router()

router.get('/proyects', getProyects)
router.post('/proyects', createProyects)
router.put('/proyects/:id', updateProyect)
router.delete('/proyects/:id', deleteProyect)
router.get('/proyects/:id', getProyect)
router.get('/proyects/:id/tasks', getProyectTasks)

export default router
