const Note = require("../models/notePost");

const get_noteList = async (req, res) => {

    // console.log(req.session.id);
    const notes = await Note.find({}).populate("userid");

    res.render("list", {
        notes
    });
}

// const notes = await Note.find();
// res.render("list", {
//     notes
// })


const get_details = async (req, res) => {
    const parId = req.params.id;

    const notes = await Note.findById(req.params.id).populate("userid");
    // console.log(notes);
    // console.log(notes.userid.username);
    res.render("details", {
        notes
    })

    // Note.findById(parId)
    //     .then(result => {
    //         res.render("details", {
    //             notes: result
    //         })
    //     })
    //     .catch(error => console.log(err));
}

module.exports = {
    get_noteList,
    get_details
}