import { Router } from 'express'
import { addWeight } from './handlers/addWeight'
import { getWeight } from './handlers/getWeight'
import { getWeights } from './handlers/getWeights'
import { removeWeight } from './handlers/removeWeight'

const router = Router()

router.post('/', addWeight)

router.get('/weight', getWeight)

router.get('/weights', getWeights)

router.delete('/deleteWeight', removeWeight)

export default router
