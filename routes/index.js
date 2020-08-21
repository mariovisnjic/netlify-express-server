const router = require('express').Router();
const googleMaps = require('./google-maps')
const mood = require('./mood')

router.use('/.netlify/functions/api/google-map-api-key', googleMaps);
router.use('/.netlify/functions/api/mood', mood);

module.exports = router;
