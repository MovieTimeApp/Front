const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    firstName: {
        type: String,
        required: 'First Name can\'t be empty'
    },
    lastName: {
        type: String,
        required: 'Last Name can\'t be empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength: [6, 'Password must be atleast 6 characters long']
    },
    saltSecret: String
});

//Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

//Events
userSchema.pre('save', function(next){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash)=>{
            this.password = hash;
            this.saltSecret = salt;
            next();
        })
    })
});

mongoose.model('User', userSchema);