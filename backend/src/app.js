import express from 'express'
import helloRouter from './hello/index'
import logger, { morganLogger } from './utils/logger'

const app = express()

app.use(morganLogger)

app.use('/hello', helloRouter)

app.listen(8000, () => {
  logger.info('Listening on https://localhost:8000/')
})
