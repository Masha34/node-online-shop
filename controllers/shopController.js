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

exports.getProduct = (req, res, next) => {
    // console.log(req.params);
    // console.log(req.params.productId);
    const productId = req.params.productId;
    Product.findByPk(productId)
    .then((product) => {
        // console.log(product)
        res.render("pages/single-product", {
            product: product
        })
    })
    .catch(err => console.log(err))
}

exports.getNewProductPage = (req, res, next) => {
    res.render("pages/addNewProduct.ejs")
}

exports.postNewProductPage = (req, res, next) => {
    console.log(req.body)
     const title = req.body.title;
     const price = req.body.price;
     const image = req.body.image;
     const description = req.body.description;

     Product.create({
         title: title,
         price: price,
         image: image,
         description: description
     })
     .then((result) => {
         console.log("Product created");
         return res.redirect("/category")
     })
     .catch(err => console.log(err));
}

// exports.getProductDelete = (req,res,next) => {
//     console.log('Delete Course');
//     const id = req.params.id;    
//     Product.destroy(
//           {
//             where: {
//               id: id
//             }
//             // force: true
//           }
//     ).then((product)=>{           
//         return res.redirect('/category');
//     })
//     .catch((err) => console.log(err));
// }

// exports.getProductEdit= (req, res, next) => {
//     // console.log('adminEditProduct');
//     const id = req.params.id;
//     Product.findByPk(id)
//    .then((product) => {      
//         res.render('pages/edit_product',{
//          product: product,
//         //  id:id,
//          //path:'/products_edit/',
//        });
//    })
//    .catch((err) => console.log(err));  
// };

// exports.postEditConfirm = (req,res,next) =>{
//     console.log('EditConfirm');
//     const id = req.params.id;
//     const title = req.body.title;
//     const price = req.body.price; 
//     const image = req.body.image;
//     const description = req.body.description;
   
//     Product.update({
//         title:title,
//         price:price,
//         image:image,
//         description:description,
//     },
//     {
//         where: {
//           id: id
//         }
//     }
//     ).then(result =>{
//         //console.log('add product result =>',result);
//         console.log('product updated');
//         res.redirect('/category');
//     })
//     .catch(err => console.log(err));
// }


// exports.get404 = (req, res, next) => {
//     res.status(404).render("pages/404")
// };