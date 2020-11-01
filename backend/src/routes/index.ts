import { Router } from 'express'
import multer from 'multer'

import uploadConfig from '../config/upload'
import OrphanagesController from '../controllers/OrphanagesController'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

import usersRouter from './users.routes'
import sessionsRouter from './sessions.routes'

const routes = Router()
const upload = multer(uploadConfig)

routes.get('/orphanages', ensureAuthenticated, OrphanagesController.index)
routes.get('/orphanages/:id', ensureAuthenticated, OrphanagesController.show)
routes.post('/orphanages', ensureAuthenticated, upload.array('images'), OrphanagesController.create)

/* Novo metodo */
routes.use('/sessions', sessionsRouter)
routes.use('/users', usersRouter)

export default routes