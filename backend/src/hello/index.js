import { Router } from 'express'
import bodyParser from 'body-parser'
import { helloHandler } from './handlers/helloHandler'
import { addMessageHandler, getMessageHandler } from './handlers/messageHandler'

const router = Router()

router.use(bodyParser.json())

router.get('/', helloHandler)

router.get('/message/:id', getMessageHandler)
router.post('/message', addMessageHandler)

export default router
