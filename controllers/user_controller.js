const User = require('../models/user');
module.exports.profile = function (req, res) {
    // console.log(req.cookies.user_id); 
    if (req.cookies.user._id) {
        User.findById(req.cookies.user._id, function (err, user) {
            if(err){
                console.log("error occurred at line 7 in user controller" + err);
            }
            if (user) {
                return res.render('user_profile',{user : user});
            }
            return res.redirect('user/signIn');
        });
    } else {
        return res.redirect('user/signIn');
    }
}
module.exports.signUP = function (req, res) {
    return res.render('user_sign_up');
}
module.exports.signIn = function (req, res) {
    return res.render('user_sign_in');
}
// get the sign up data
module.exports.create = function (req, res) {
    if (req.body.password != req.body.confirmPassword) {
        return res.redirect('back');
    }

    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) { console.log('error in finding user in signing up'); return }

        if (!user) {
            User.create(req.body, function (err, user) {
                if (err) { console.log('error in creating user while signing up'); return }

                return res.redirect('/user/signIn');
            })
        } else {
            return res.redirect('back');
        }

    });
}

module.exports.signIn = function (req, res) {
    return res.render('user_sign_in');
}
module.exports.createSession = function (req, res) {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            console.log('error in finding user in sign in' + err); return;
        }
        if (user) {
            if (user.password != req.body.password) {
                res.redirect('back');
            }
            res.cookie('user_id', user.id);
            return res.redirect('/user/profile')
        } else {
            return res.redirect('back');
        }
    });
}