module.exports = function(app) {
    const auth = require('./authController');

    // 2. 로그인 API
    app.post('/auth/login', auth.login);
}