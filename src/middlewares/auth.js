const GoogleAuth = require('../helpers/GoogleAuth');

/**
 * Проверить гугл токен
 * @param {object} req объект запроса
 * @param {object} res объект ответа
 * @param {function} next следующая функция
 * @returns {Promise<void>}
 */
async function verifyGoogleToken(req, res, next) {
    const token = req.body.token;

    if (!token) {
        res.status(400).json({message: 'Token is not found'});
    }

    const googleAuth = new GoogleAuth(token);
    try {
        await googleAuth.verify()
        next();
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

/**
 * Получить информацию о пользователе по токену
 * @param {object} req объект запроса
 * @param {object} res объект ответа
 * @param {function} next следующая функция
 * @returns {Promise<void>} req.user информация о пользователе
 */
async function getUserFromToken (req, res, next) {
    const token = req.cookies['session-token'];

    if (!token) {
        res.status(400).json({message: 'Token is not found'});
    }

    const user = {};
    const googleAuth = new GoogleAuth(token);

    try {
        const payload = await googleAuth.verify()
        user.name = payload.name;
        user.email = payload.email;
        user.picture = payload.picture;
        req.user = user;
        next();
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}


module.exports = {
    verifyGoogleToken,
    getUserFromToken
}
