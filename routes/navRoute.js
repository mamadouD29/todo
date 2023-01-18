const navController = require("../controllers/navController"),
    loginController = require("../controllers/loginController"),
    createController = require("../controllers/createController"),
    registerController = require("../controllers/registerController")
authMiddleware = require("../middleware/authMiddleware"),
    redirectIfAuthenticateMiddleware = require("../middleware/redirectIfAuthenticateMiddleware");
//   const {} noteListController = require("../controllers/noteListController"),
const {
    get_noteList,
    get_details,
    get_detailPage
} = require("../controllers/noteListController"),



    express = require("express");

const router = express.Router();




router.get("/", navController.get_index);
router.get("/index", navController.get_home);
router.get("/logout", navController.get_logout);

router.get("/login", redirectIfAuthenticateMiddleware, loginController.get_login);
router.post("/login", redirectIfAuthenticateMiddleware, loginController.loginUser);

router.get("/register", redirectIfAuthenticateMiddleware, registerController.get_register);
router.post("/register", redirectIfAuthenticateMiddleware, registerController.storeUser);

router.get("/create", authMiddleware, createController.get_create);
router.post("/create", authMiddleware, createController.post_note);

router.get("/list", authMiddleware, get_noteList);
router.get("/list/:id", authMiddleware, get_details);
router.get("/list/details", authMiddleware, get_details);
router.get("/list/details", authMiddleware, get_detailPage);

module.exports = router;