var port = process.env.PORT || 80
var express = require('express')
var app = express();
var path = require('path')

app.use(express.static(path.join(__dirname, "../dist")))
app.set("view engine", "hbs")
app.set('views', path.join(__dirname, 'views'));



app.get("/", function(req, res) {
    res.render("index.hbs")
})


app.get("**", function(req, res) {
    res.redirect("/")
});


app.listen(port, () => {
    console.log('Listening on port:' + port)
})