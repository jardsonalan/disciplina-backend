// import type { HttpContext } from '@adonisjs/core/http'

const list = []
let id = 1

export default class IndicesController {
  index(){
    return list
  }

  create(context: HttpContext) {
    let name = context.request.input('name')
    let content = {
      id: id++,
      name: name,
    }
    list.push(content)
    return list
  }

  delete(context: HttpContext) {
    let id = context.request.param('id')
    // TODO: remover o objeto da lista
    // TODO: retornar o objeto removido
  }
}
