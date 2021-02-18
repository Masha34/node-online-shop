const Product = require("../models/product")

exports.getHomePage = (req, res, next) => {
        res.render("pages/index")
}

exports.getCategoryPage = (req, res, next) => {
    // Product.fetchAll()
    Product.findAll()
    .then((products) => {
        // console.log("Data from DB ", rows)
        res.render("pages/category",{
            products: products
        });
    })
    .catch(err => console.log(err));
}
exports.getSingleProductPage = (req, res, next) => {
    res.render("pages/single-product")
}
exports.getCheckoutPage = (req, res, next) => {
    res.render("pages/checkout")
}
exports.getConfirmationPage = (req, res, next) => {
    res.render("pages/confirmation")
}
exports.getCartPage = (req, res, next) => {
    res.render("pages/cart")
}

exports.getBlogPage = (req, res, next) => {
    res.render("pages/blog")
}
exports.getSingleBlogPage = (req, res, next) => {
    res.render("pages/single-blog")
}

exports.getLoginPage = (req, res, next) => {
    res.render("pages/login")
}
exports.getRegisterPage = (req, res, next) => {
    res.render("pages/register")
}
exports.getTrackingOrderPage = (req, res, next) => {
    res.render("pages/tracking-order")
}


exports.getContactPage = (req, res, next) => {
    res.render("pages/contact")
}


// exports.get404 = (req, res, next) => {
//     res.status(404).render("pages/404")
// };