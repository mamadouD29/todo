// load the user module 
const User = require("../models/User");

const get_register = (req, res) => {
    let username = ""
    let password = ""
    const data = req.flash("data")[0];

    if (typeof data != "undefined") {
        username = data.username;
        password = data.password;
    }
    res.render("register", {
        // errors: req.session.validationErrors
        errors: req.flash('validationErrors'),
        username: username,
        password: password

    })
}
// store user
const storeUser = async (req, res) => {
    await User.create(req.body, (error, user) => {

        // if username or email exist
        if (error) {
            const validationErrors = Object.keys(error.errors).map(key =>
                error.errors[key].message)
            req.flash('validationErrors', validationErrors)
            req.flash("data", req.body);
            // req.session.validationErrors = validationErrors
            return res.redirect("/register");
        }

        res.redirect("/index");
    })
}

module.exports = {
    get_register,
    storeUser
}