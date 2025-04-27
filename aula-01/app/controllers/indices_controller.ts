import type { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger'

interface InterfaceList {
  id: number
  name: string
}

let list: Array<InterfaceList> = []
let id = 1

export default class IndicesController {
  index() {
    return list
  }

  create(context: HttpContext) {
    let name = context.request.input('name')
    let content = {
      id: id++,
      name: name,
    }
    list.push(content)
    // logger.info(list, 'Created user')
    return list
  }

  delete(context: HttpContext) {
    // identification: armazena o id informado
    let identification = context.request.param('id')
    // index: verifica se o id informado existe, dentro de algum objeto, e retorna o index do objeto que o id está presente
    // Retorno -1: informa que o id não existe dentro de nenhum objeto
    let index = list.findIndex((el) => el.id === Number(identification))
    logger.info(index)
    // Verifica se o resultado do index é diferente de -1, ou seja, verifica se o id está presente dentro de algum objeto
    if (index !== -1) {
      // splice: recebe o index do objeto retornado na variável index. E o 1, informa que o splice deve deletar apenas 1 objeto da lista
      return list.splice(index, 1) // Retorna o objeto removido
    }
    // Caso o id não exista, dentro de nenhum objeto, retorna um json response informando um erro
    return { error: 'ID não encontrado.' }
  }
}
