import bodyParser from 'body-parser'
import express from 'express'
import helloRouter from './hello/index'
import logger, { morganLogger } from './utils/logger'
import weightRouter from './weight/index'
import foodRouter from './food/index'

const app = express()

app.use(morganLogger)
app.use(bodyParser.json())

app.use('/hello', helloRouter)
app.use('/weight', weightRouter)
app.use('food', foodRouter)

app.listen(8000, () => {
  logger.info('Listening on https://localhost:8000/')
})
