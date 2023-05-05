import { Proyect } from '../models/proyect.js'
import { Task } from '../models/task.js'

export const getProyects = async (req, res) => {
  try {
    const proyects = await Proyect.findAll()
    res.json(proyects)
  } catch (error) {
    const { message } = error
    res.status(500).json({ message })
  }
}

export const getProyect = async (req, res) => {
  try {
    const { id } = req.params
    const proyect = await Proyect.findOne({
      where: {
        id,
      },
    })

    if (!proyect)
      return res.status(404).json({ message: 'Proyect does not exists' })

    res.json(proyect)
  } catch (error) {
    const { message } = error
    res.status(500).json({ message })
  }
}

export const createProyects = async (req, res) => {
  const { name, priority, description } = req.body
  try {
    const newProyect = await Proyect.create({ name, priority, description })
    res.json(newProyect)
  } catch (error) {
    const { message } = error
    res.status(500).json({ message })
  }
}

export const updateProyect = async (req, res) => {
  try {
    const { id } = req.params
    const { name, priority, description } = req.body

    const proyect = await Proyect.findByPk(id)

    if(!Object.entries(proyect).length) throw new Error('Proyect does not exists')

    proyect.name = name
    proyect.priority = priority
    proyect.description = description

    await proyect.save()

    res.json(proyect)
  } catch (error) {
    const { message } = error
    res.status(500).json({ message })
  }
}
export const deleteProyect = async (req, res) => {
  try {
    const { id } = req.params
    await Proyect.destroy({
      where: {
        id,
      },
    })

    res.sendStatus(204)
  } catch (error) {
    const { message } = error
    res.status(500).json({ message })
  }
}

export const getProyectTasks = async (req, res) => {
  try {
    const { id } = req.params
    const tasks = await Task.findAll({
      where: { proyectId: id },
    })

    if(!tasks.length) throw new Error('Tasks does not exists')

    res.json(tasks)
  } catch (error) {
    const { message } = error
    res.status(500).json({ message })
  }
}
