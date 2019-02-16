module.exports = {
    ensureAuthenticated: function(req, res, next){
        if (req.isAuthenticated()) { //Given by passport
            return next();
        }

        req.flash('error_msg', 'Please log in');
        res.redirect('/users/login');
    }
}
