const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'pug');

const usersRouter = require('./routes/users');
const addUserRouter = require('./routes/add-user').router;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.use("/add-user", addUserRouter);
app.use("/users", usersRouter);

app.get('/', (req, res, next) => {
    res.render('home', {pageTitle: 'Home', pageHeading: 'Home'});
    //res.send('<h1>Home</h1><form action="/add-user" method="POST"><input type="text" name="username"><input type="submit"></form>');
})

app.listen(3000);