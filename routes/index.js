const router = require('express').Router();
const googleMaps = require('./google-maps')

router.use('/.netlify/functions/api/google-map-api-key', googleMaps);

module.exports = router;
