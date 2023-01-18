const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NotePost = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    datePosted: {
        type: Date,
        default: new Date()
    }

}, {
    timestamps: true
});


const Note = mongoose.model("Note", NotePost);


module.exports = Note;