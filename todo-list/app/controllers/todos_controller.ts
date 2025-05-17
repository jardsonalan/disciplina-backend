import type { HttpContext } from '@adonisjs/core/http'
import Todo from '#models/todo'

export default class TodosController {
  public async index({}: HttpContext) {
    return await Todo.all()
  }

  public async indexById({ params }: HttpContext) {
    return await Todo.findOrFail(params.id)
  }

  public async create({ request }: HttpContext) {
    const todo = new Todo()
    todo.tarefa = request.input('tarefa')
    await todo.save()
    return await todo.id
  }

  public async update({ params, request }: HttpContext) {
    const tarefa = await Todo.findOrFail(params.id)
    return await tarefa.merge(request.only(['tarefa'])).save()
  }

  public async delete({ params }: HttpContext) {
    const todo = await Todo.findOrFail(params.id)
    return await todo.delete()
  }
}
