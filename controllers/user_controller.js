const User = require('../models/user');
const passport = require('passport');
module.exports.profile = function (req, res) {
    // console.log(req.cookies.user_id); 
    return res.render('user_profile');
}
module.exports.signUP = function (req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/user/profile');
    }
    return res.render('user_sign_up');
}
module.exports.signIn = function (req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/user/profile');
    }
    return res.render('user_sign_in');
}
// get the sign up data
module.exports.create = function (req, res) {
    if (req.body.password != req.body.confirm_password) {
        console.log("passwords did not match");
        return res.redirect('back');
    }

    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) { console.log('error in finding user in signing up'); return }

        if (!user) {
            User.create(req.body, function (err, user) {
                if (err) { console.log('error in creating user while signing up'); return }
                console.log("redirecting to user sign in page");
                return res.redirect('/user/signIn');
            })
        } else {
            console.log("error at line 29");
            return res.redirect('back');
        }

    });
}



module.exports.createSession = function (req, res) {
    return res.redirect('/');
}
module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/');
}