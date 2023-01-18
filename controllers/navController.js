// get_create , get_index, get_list, get_login,get_register, get_home

const get_index = async (req, res) => {
    await res.render("index");
}
const get_home = async (req, res) => {
    await res.redirect("/");
}

const get_logout = async (req, res)=>{
    await req.session.destroy(() =>{
        res.redirect("/")
    })
}

module.exports = {
    get_home,
    get_index,
    get_logout
};