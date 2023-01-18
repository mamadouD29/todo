// load the user module 
const Note = require("../models/notePost");

const get_create = (req, res) => {
    if (req.session.userId) {

        return res.render("create");
    }
    res.redirect("/login");
}


const post_note = async (req, res) => {


    await Note.create({
            ...req.body,
            userid: req.session.userId
        })
        .then(result => {

            res.redirect("/list");
        })
        .catch(err => res.redirect("/create"));

    // Note.create(req.body, (err, note) => {
    //     if (err) {
    //         //show validation error
    //         return res.redirect("/create");
    //     }
    // })
    // res.redirect("/list");

}


module.exports = {
    get_create,
    post_note
}