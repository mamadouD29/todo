
// Prevent Login/Register if Logged In

const redIFAuth = (req, res, next)=>{
    if(req.session.userId){
        return res.redirect("/");
    }
    next();
}


module.exports = redIFAuth;