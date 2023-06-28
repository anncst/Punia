import { application, Router } from 'express'
import bodyParser from 'body-parser'
import { addFood } from './handlers/addFood'
import { getFood } from './handlers/getFood'
import { getFoods } from './handlers/getFoods'
import { removeFood } from './handlers/removeFood'

const router = Router()

router.post('/', addFood)

router.get('/food', getFood)

router.get('/foods', getFoods)

router.delete('/deleteFood', removeFood)

export default router
