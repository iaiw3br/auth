const authController = require('../controllers/auth');
const userController = require('../controllers/user');
const middleware = require('../middlewares/auth');

module.exports = app => {
    app.post('/login', middleware.verifyGoogleToken, authController.signin);
    app.get('/login', authController.login)
    app.get('/profile', middleware.getUserFromToken, userController.profile)
    app.get('/logout', authController.logout)
}
