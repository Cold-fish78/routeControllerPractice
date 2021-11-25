const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8001;
app.use(cookieParser());
const db = require('./config/mongoose');
// imported express session for creating a session at the time of user authentication , used for session cookies
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
app.use(express.urlencoded());
// setting up view engine (ejs)
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment to production
    secret: 'blahSomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
// use express router
app.use('/', require('./routes/'));

// this would be created before introduction to routers
app.listen(port, function (err) {
    if (err) {
        console.log("error occured at listening" + err);
    }
    else {
        console.log("server is running on port" + port);
    }
})