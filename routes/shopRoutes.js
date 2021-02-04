const { getHomePage, getCategoryPage, getSingleProductPage, getCheckoutPage, getConfirmationPage, getCartPage, getBlogPage, getSingleBlogPage, getLoginPage, getRegisterPage, getTrackingOrderPage, getContactPage } = require("../controllers/shopController")

const express = require("express");
const router = express.Router();

// router.get("/", (req, res, next) => {
//     res.send("<h1>Home page</h1>")getSingleBlogPage
// });
// теж саме знизу
router.get("/", getHomePage);

router.get("/category", getCategoryPage);
router.get("/single-product", getSingleProductPage);
router.get("/checkout", getCheckoutPage);
router.get("/confirmation", getConfirmationPage);
router.get("/cart", getCartPage);

router.get("/blog", getBlogPage);
router.get("/single-blog", getSingleBlogPage);

router.get("/login", getLoginPage);
router.get("/register", getRegisterPage);
router.get("/tracking-order", getTrackingOrderPage);


router.get("/contact", getContactPage);


module.exports = router;