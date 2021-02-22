 const express = require("express");
 const path = require("path");
 const bodyParser = require("body-parser");
//  console.log(express)

// Підключаємо shop routes
 const shopRoutes = require("./routes/shopRoutes");
 const errorController = require("./controllers/errorController");

 const PORT = 8000;
 const app = express();

 //підключаємо шаблонізатор ejs
 app.set("view engine", "ejs")
 app.set("views", "views")
 app.use(bodyParser.urlencoded({extended:false}));

 //вказуємо де будуть зберігатися статистичні файли
 app.use(express.static(path.join(__dirname,"static")));

 //Use midlleware
app.use(shopRoutes);

app.use(errorController.get404);

 app.listen(PORT, () => console.log(`Server running on port ${PORT}`));