// Project coded as part of Colt Steele's Udemy Web Dev Bootcamp

var express = require("express");
var app     = express();
var jQuery  = require("jquery");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.get("/", function(req, res){
    res.render("home");

});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("TODO server is running!");
});