var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/components', function(req, res){
    res.render('home-page');
});

 port = 5000
 app.listen(port, console.log(`port is running on ${port}`));
 