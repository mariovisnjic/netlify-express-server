const mongoose = require('mongoose')

//SCHEMA
const Schema = mongoose.Schema

const MoodSchema = new Schema(
    {
        fullname: mongoose.Schema.Types.String
    },
    {collection: 'Mood', versionKey: false}
)

//MODEL
const Mood = mongoose.model('Mood', MoodSchema)

module.exports = Mood
