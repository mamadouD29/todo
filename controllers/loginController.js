// load the user module 
const User = require("../models/User");
const bcrypt = require("bcrypt");

const get_login = async (req, res) => {
    await res.render("login");
}


const loginUser = (req, res) => {
    const {
        username,
        password
    } = req.body;

    User.findOne({
        username: username
    }, (err, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (err, same) => {
                if (same) {
                    req.session.userId = user._id;
                    
                    res.redirect("/");
                } else {
                    res.redirect("/login");
                }
            })
        } else {
            res.redirect("/login");
        }
    })
}



module.exports = {
    get_login,
    loginUser
}