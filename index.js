const express = require('express');
const app = express();
const port = 8000;
// use express router
app.use('/',require('./routes/index'));



// this would be created before introduction to routers
app.listen(port,function(err){
    if(err){
        console.log("error occured at listening" + err);
    }
    else{
        console.log("server is running on port" + port);
    }
})