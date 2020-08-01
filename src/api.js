const express = require('express')
const serverless = require('serverless-http')
const cors = require('cors')
require('dotenv').config()

var corsOptions = {
    origin: function (origin, callback) {
        const allowedDomain = process.env.NODE_ENV === 'production' ? 'https://mariovisnjic.com' : 'http://localhost:3000'
        if (allowedDomain === origin){
            return callback(null, true)
        }
        callback(new Error('Not allowed by CORS'))
    }
}

const app = express()
console.log(corsOptions)
app.use(cors(corsOptions))

const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is base route')
})

router.get('/google-map-api-key', (req, res) => {
    res.send(process.env.GOOGLE_MAPS_API_KEY)
})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)
