
const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')
const logger = require('./utils/logger')

logger.info('Trying to connect to:', config.MONGODB_URI)
logger.info('...')
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('Connected')
  })
  .catch(() => {
    logger.error('Error: Could not connect')
  })

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
app.use('/api/blogs', blogsRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app