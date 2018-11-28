import './config'
import './config/db'
import Api from './api/'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser from 'body-parser'

const app = express()

// Global middleware stack
app.use(helmet())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Register our api
// All routing will be handled in the /api dir
app.use('/', Api)

app.listen(3000, () => console.log('Example app listening on port 3000!'))

