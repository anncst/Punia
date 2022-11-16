import { Router } from 'express'
import { addWeight } from './handlers/addWeight'
import { getWeight } from './handlers/getWeight'
import { getWeights } from './handlers/getWeights'

const router = Router()

router.post('/', addWeight)

router.get('/weight', getWeight)

router.get('/weights', getWeights)

export default router
