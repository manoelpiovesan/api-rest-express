const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
   
},{
    timestamps: true,
});

const User = mongoose.model('User', UserSchema);

module.exports = {User, UserSchema};