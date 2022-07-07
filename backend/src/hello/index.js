import { Router } from 'express'
import { helloHandler } from './handlers/helloHandler'

const router = Router()

router.get('/', helloHandler)

export default router
