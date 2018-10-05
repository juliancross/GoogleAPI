const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extented: true
}))

app.get('/', function(req, res, next) {
    res.render('index', {
        result: "Please insert your Web Property ID",
    });
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Vous êtes sur le port 8080...");
})