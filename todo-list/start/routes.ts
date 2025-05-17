/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', '#controllers/todos_controller.index')
router.get('/:id', '#controllers/todos_controller.indexById')
router.post('/', '#controllers/todos_controller.create')
router.put('/:id', '#controllers/todos_controller.update')
router.patch('/:id', '#controllers/todos_controller.update')
router.delete('/:id', '#controllers/todos_controller.delete')
