import { Router } from 'express'
import ipadRouter from './ipads'

const api = Router()
api.use('/ipads', ipadRouter)

export default api