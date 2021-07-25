function profile(req, res) {
    const user = req.user;

    if (!user) {
        return res.status(400).send({message: 'User is not found!'});
    }
    res.render('profile', {user: req.user});
}


module.exports = {
    profile,
}
