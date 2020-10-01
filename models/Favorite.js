const mongoose = require('mongoose')

const favoriteSchema = mongoose.Schema({
    favImageURL: {
        type: String
    }
})
const Favorite = mongoose.model('Favorite', favoriteSchema)
module.exports = Favorite;