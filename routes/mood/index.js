const router = require('express').Router();
const Mood = require('../../models/mood')
require('dotenv').config()

router.get('/', (req, res) => {
    Mood.aggregate(
        [{
            "$group": {
                "_id": null,
                "physical": {"$avg": "$physical"},
                "emotional": {"$avg": "$emotional"},
                "focus": {"$avg": "$focus"}
            }
        }], function (err, data) {
            if (err) {
                return res.json({
                    success: false,
                    error: 'aggregation failed'
                });
            }

            res.json({
                success: true,
                data: data[0]
            });
        });
})


router.post('/insert', (req, res) => {
    const mood = req.body

    if (mood.password !== process.env.MOOD_PASSWORD) {
        return res.json({
            success: false,
            error: 'invalid password'
        })
    }

    Mood.create(mood, function (err, data) {
        if (err) {
            return res.json({
                success: false,
                error: 'creation failed'
            });
        }

        res.json({
            success: true,
            data: data
        });
    });
})

module.exports = router;
