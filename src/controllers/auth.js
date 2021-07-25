async function signin(req, res) {
    const token = req.body.token;

    res.cookie('session-token', token);
    res.send('success-token');
}

function login(req, res) {
    res.render('login');
}

function logout(req, res) {
    res.render('login');
}

module.exports = {
    signin,
    login,
    logout
}
