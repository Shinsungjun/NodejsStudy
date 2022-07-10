const jwtMiddleware = require("../../config/jwtMiddleware");
const userProvider = require("./userProvider");
const userService = require("./userService");
const baseResponse = require("../../config/baseResponseStatus");
const {response, errResponse} = require("../../config/response");
const regexEmail = require("regex-email");
const {emit} = require("nodemon");

/**
 * API No. 1
 * API Name : 회원가입 API
 * [POST] /users
 */
exports.postUsers = async function(req, res) {
    /**
     * Body: phoneNumber
     */

    // body 값 가져오기
    const { phoneNumber } = req.body;

    // 형식적 validation (값 존재 유무, 길이, 형식)
    if (!phoneNumber) {
        return res.send(errResponse(baseResponse.SIGNUP_PHONENUMBER_EMPTY));
    }
    else if (phoneNumber.length > 11) {
        return res.send(errResponse(baseResponse.SUCCESS));
    }

    // create -> Service에서 처리
    const signUpResponse = await userService.createUser(phoneNumber);

    // response return
    return res.send(signUpResponse);
};



/** JWT 토큰 검증 API
 * [GET] /app/auto-login
 */
exports.check = async function (req, res) {
    const userIdResult = req.verifiedToken.userId;
    console.log(userIdResult);
    return res.send(response(baseResponse.TOKEN_VERIFICATION_SUCCESS));
};
