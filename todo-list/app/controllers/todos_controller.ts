import type { HttpContext } from '@adonisjs/core/http'
import Todo from '#models/todo'
import { createTodoValidator, updateTodoValidator } from '#validators/todo'

export default class TodosController {
  public async index({}: HttpContext) {
    return await Todo.all()
  }

  public async indexById({ params }: HttpContext) {
    return await Todo.findOrFail(params.id)
  }

  public async create({ request }: HttpContext) {
    const payload = await request.validateUsing(createTodoValidator)
    const todo = await Todo.create(payload)
    return todo.id
  }

  public async update({ request, params }: HttpContext) {
    const todo = await Todo.findOrFail(params.id)
    const payload = await request.validateUsing(updateTodoValidator)
    todo.tarefa = payload.tarefa
    return todo.save()
  }

  public async updateConcluida({ params }: HttpContext) {
    const todo = await Todo.findOrFail(params.id)
    todo.concluida = !todo.concluida
    await todo.save()
  }

  public async delete({ params }: HttpContext) {
    const todo = await Todo.findOrFail(params.id)
    return await todo.delete()
  }
}
