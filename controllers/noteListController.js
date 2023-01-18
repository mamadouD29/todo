const Note = require("../models/notePost");

const get_noteList = async (req, res) => {

    // console.log(req.session.id);
    const notes = await Note.find({}).populate("userid");

    res.render("list", {
        notes
    });
}

const get_details = (req, res) => {
    const parId = req.params.id;


    Note.findById(parId)
        .then(result => {
            res.render("details", {
                notes: result
            })
        })
        .catch(error => console.log(err));
}

const get_detailPage = (req, res) => {
    res.render("details");
}

module.exports = {
    get_noteList,
    get_details,
    get_detailPage
}