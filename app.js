 const express = require("express");
 const path = require("path");
//  console.log(express)

// Підключаємо shop routes
 const shopRoutes = require("./routes/shopRoutes");

 const PORT = 8000;
 const app = express();

 //підключаємо шаблонізатор ejs
 app.set("view engine", "ejs")
 app.set("views", "views")

 //вказуємо де будуть зберігатися статистичні файли
 app.use(express.static(path.join(__dirname,"static")));

 //Use midlleware
app.use(shopRoutes);

 app.listen(PORT, () => console.log(`Server running on port ${PORT}`));