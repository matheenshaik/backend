const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema( {
    
    name: String,    
    HeadQuater:String

}, { timestamps: true });

module.exports = mongoose.model('newPublisher', publisherSchema)
