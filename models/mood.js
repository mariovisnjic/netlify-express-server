const mongoose = require('mongoose')

//SCHEMA
const Schema = mongoose.Schema

const MoodSchema = new Schema(
    {
        physical: mongoose.Schema.Types.Number,
        emotional: mongoose.Schema.Types.Number,
        focus: mongoose.Schema.Types.Number,
        day: mongoose.Schema.Types.Number,
        hour: mongoose.Schema.Types.Number,
        fullDate: mongoose.Schema.Types.Date
    },
    {collection: 'Mood', versionKey: false}
)

//MODEL
const Mood = mongoose.model('Mood', MoodSchema)

module.exports = Mood
