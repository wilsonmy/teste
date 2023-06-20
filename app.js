const express = require("express");
const path    = require("path");
const app = express();
const PORT = 3000.

app.set('views', './views');
app.set('view engine', 'ejs');
app.set(express.static(path.join(__dirname, 'public')));

// Rotas
const homeRoute  = require("./routes/homeRoutes");
const userRoute  = require("./routes/userRoutes");
const cursoRoute = require("./routes/cursoRoutes");

app.use(homeRoute);
app.use(userRoute);
app.use(cursoRoute);

app.listen(PORT, () => {
   console.log(`Servidor on port ${PORT}`);
   console.log(`########################`);
});
