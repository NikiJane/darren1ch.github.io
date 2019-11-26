import express, { json } from 'express'
import routes from './routes'
import logger from './logging/logger'
import requestLogger from './logging/requestLogger'
import cors from 'cors'

const port = process.env.PORT || 8080

express()
  .use(requestLogger)
  .use(json())
  .use(cors())
  .get('/healthcheck', (_, response) => response.send())
  .use('/v1', routes)
  .get('/', (req, res) => { res.send('Hiiiiiiiiiiii')})
  .listen(port, '0.0.0.0', (err) => {
    if (err) {
      logger.error(err)
      return
    }
    logger.info(`Started. Listening on port ${port}.`)
  })
