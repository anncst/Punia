import { Router } from 'express'
import { addWeight } from './handlers/addWeight'

const router = Router()

router.post('/', addWeight)

export default router
