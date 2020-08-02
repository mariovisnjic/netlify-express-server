const router = require('express').Router();
require('dotenv').config()

router.get('/', (req, res) => {
    res.send(process.env.GOOGLE_MAPS_API_KEY)
})

module.exports = router;
