const mongoose = require("mongoose");
// use a mongoose model hook to encrypt a password
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcrypt");

// create an instance of schema
const Schema = mongoose.Schema;


// create a schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "Please provide username"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: true
    },
    note: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Note"
    }
})

UserSchema.pre("save", function (next) {
    const user = this;

    bcrypt.hash(user.password, 10, (err, hash) => {
        user.password = hash;

        next();
    })
})


// create a model
const User = mongoose.model("User", UserSchema);

// duplicate error 
UserSchema.plugin(uniqueValidator);

// export model
module.exports = User;