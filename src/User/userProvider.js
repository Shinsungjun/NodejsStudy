const baseResponse = require("../../config/baseResponseStatus");
const { pool } = require("../../config/database");
const { response, errResponse } = require("../../config/response");
const { logger } = require("../../config/winston");

const userDao = require("./userDao");

// Provider: Read 비즈니스 로직 처리

exports.phoneNumberCheck = async function(phoneNumber) {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
        const phoneNumberResult = await userDao.selectUserPhoneNumber(connection, phoneNumber);

        if (phoneNumberResult.length > 0) {
            return response(baseResponse.DB_ERROR, phoneNumberResult);
        } else {
            return response(baseResponse.SUCCESS);
        }
        
    } catch (err) {
        console.log(`CHECK PHONENUMBER SERVICE ERROR:\n${err.message}`);

        return errResponse(baseResponse.DB_ERROR);
    } finally {
        connection.release();
    }
}