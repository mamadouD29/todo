const express = require('express'),
    ejs = require("ejs"),
    mongoose = require("mongoose"),
    navRoute = require("./routes/navRoute"),
    bodyParser = require("body-parser"),
    expressSession = require("express-session"),
    authMiddleware = require("./middleware/authMiddleware"),
    flash = require("connect-flash");

const app = express();
let port = process.env.PORT || 3000;

global.loggedIn = null;
mongoose.set('strictQuery', true);

const uri = "mongodb+srv://Mamadou:Versus22@cluster0.occcwxf.mongodb.net/todo";
mongoose.connect(uri)
.then(result => console.log("Monggose connected !!"))
.catch(err => console.log("mongoose has issues!!\n"))

// .then(result => )
    // .catch(err => console.log(err));

    app.listen(port, () => console.log(`App listening on port ${port}!`))


// middleware and template

app.use(express.static("public"));
app.use(express.urlencoded({
    extended: true
}));

app.use(expressSession({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
}));

app.set("view engine", "ejs");
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;

    next()
})

app.use(flash());





// nav routes
app.use(navRoute);


app.use((req, res) => {
    res.status(404).render("404");
})