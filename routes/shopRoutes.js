const { getHomePage, getAboutPage, getContactPage } = require("../controllers/shopController")

const express = require("express");
const router = express.Router();

// router.get("/", (req, res, next) => {
//     res.send("<h1>Home page</h1>")
// });
// теж саме знизу
router.get("/", getHomePage);

router.get("/about", getAboutPage);
router.get("/contact", getContactPage);


module.exports = router;