const router = require('express').Router();
//const Mood = require('../../models/mood')
require('dotenv').config()

router.get('/', (req, res) => {
   /*var query = Mood.findOne();

    query.exec(function (err, person) {
        if (err) return handleError(err);
        console.log("tu");
        console.log(person);
    });

    Mood.create({'fullname':'denis'})*/

    res.send(process.env.GOOGLE_MAPS_API_KEY)
})

module.exports = router;
