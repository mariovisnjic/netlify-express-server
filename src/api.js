const express = require('express')
const serverless = require('serverless-http')
const cors = require('cors')
const routes = require('../routes')

const corsOptions = {
    origin: function (origin, callback) {
        const allowedDomain = process.env.NODE_ENV === 'production' ? 'https://mariovisnjic.com' : 'http://localhost:3000'
        if (allowedDomain === origin){
            return callback(null, true)
        }
        callback(new Error('Not allowed by CORS'))
    }
}

const app = express()

app.use(cors(corsOptions))

app.use(routes);

module.exports.handler = serverless(app)
