/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', '#controllers/indices_controller.index')
router.post('/', '#controllers/indices_controller.create')
router.delete('/:id', '#controllers/indices_controller.delete')
