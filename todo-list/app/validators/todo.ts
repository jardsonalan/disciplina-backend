import vine from '@vinejs/vine'

export const createTodoValidator = vine.compile(
  vine.object({
    tarefa: vine.string().minLength(3),
  })
)

export const updateTodoValidator = vine.compile(
  vine.object({
    tarefa: vine.string().minLength(3),
  })
)
