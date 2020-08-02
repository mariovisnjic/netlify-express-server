const router = require('express').Router();
//const models = require('../../models')
require('dotenv').config()

router.get('/', (req, res) => {
   /*var query = models.Mood.findOne();

    query.exec(function (err, person) {
        if (err) return handleError(err);
        console.log("tu");
        console.log(person);
    });

    models.Mood.create({'fullname':'denis'})*/

    res.send(process.env.GOOGLE_MAPS_API_KEY)
})

module.exports = router;
