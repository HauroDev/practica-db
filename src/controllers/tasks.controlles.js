import { Task } from '../models/task.js'
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll()

    res.json(tasks)
  } catch (error) {
    const { message } = error
    res.status(500).json({ message })
  }
}
export const createTask = async (req, res) => {
  const { name, done, proyectId } = req.body

  try {
    const newTask = await Task.create({
      name,
      done,
      proyectId,
    })

    res.json(newTask)
  } catch (error) {
    const { message } = error
    res.status(500).json({ message })
  }
}
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params

    const task = await Task.findByPk(id)
    task.set(req.body)
    await task.save()

    res.json(task)
  } catch (error) {
    const { message } = error
    res.status(500).json({ message })
  }
}
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params

    const result = await Task.destroy({
      where: {
        id,
      },
    })

    if (!result) return res.status(404).json({ message: 'task does not found' })

    res.sendStatus(204)
  } catch (error) {
    const { message } = error
    res.status(500).json({ message })
  }
}
export const getTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findOne({ where: { id } })

    res.json(task)
  } catch (error) {
    const { message } = error
    res.status(500).json({ message })
  }
}
