const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    user:{
		type: ObjectId,
		ref: 'AppUser',
		required:true

	},
	product:{
		type:ObjectId,
		ref: 'AppProduct',
		required:true
	},

    amount: Number,
	isFreeAppUser:Boolean, 
	date: String

}, { timestamps: true });


module.exports = mongoose.model('Order', orderSchema) 
