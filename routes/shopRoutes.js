// const { getHomePage, getCategoryPage, getSingleProductPage, getCheckoutPage, getConfirmationPage, getCartPage, getBlogPage, getSingleBlogPage, getLoginPage, getRegisterPage, getTrackingOrderPage, getContactPage, getProduct, getNewProductPage } = require("../controllers/shopController")
// get404
// те ж саме що зверху
const shopController = require("../controllers/shopController")

const express = require("express");
const router = express.Router();

// router.get("/", (req, res, next) => {
//     res.send("<h1>Home page</h1>")getSingleBlogPage
// });
// теж саме знизу
router.get("/", shopController.getHomePage);

router.get("/category", shopController.getCategoryPage);
router.get("/single-product", shopController.getSingleProductPage);
router.get("/checkout", shopController.getCheckoutPage);
router.get("/confirmation", shopController.getConfirmationPage);
router.get("/cart", shopController.getCartPage);

router.get("/blog", shopController.getBlogPage);
router.get("/single-blog", shopController.getSingleBlogPage);

router.get("/login", shopController.getLoginPage);
router.get("/register", shopController.getRegisterPage);
router.get("/tracking-order", shopController.getTrackingOrderPage);


router.get("/contact", shopController.getContactPage);

router.get("/products/:productId", shopController.getProduct);
router.get("/add-product", shopController.getNewProductPage);

router.post("/add-product", shopController.postNewProductPage);

// router.get("/products_delete/:id", shopController.getProductDelete);
// router.get("/products_edit/:id", shopController.getProductEdit);
// router.post('/product_editConfirm/:id', shopController.postEditConfirm);

// router.get("*", get404);


module.exports = router;