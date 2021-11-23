const express = require('express');
const app = express();
const port = 8001;
const cookieParser = ('cookie-parser');
app.use(express.urlencoded()); 
// use express router
app.use('/',require('./routes/'));
// setting up view engine (ejs)
app.set('view engine','ejs');
app.set('views','./views');

const db = require('./config/mongoose');

// this would be created before introduction to routers
app.listen(port,function(err){
    if(err){
        console.log("error occured at listening" + err);
    }
    else{
        console.log("server is running on port" + port);
    }
})