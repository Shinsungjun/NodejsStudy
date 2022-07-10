// phoneNumber 조회
async function selectUserPhoneNumber(connection, phoneNumber) {
    const selectUserPhoneNumberQuery = `
        SELECT phoneNumber
        FROM User
        WHERE phoneNumber = ?;
    `;
    const [phoneNumberRow] = await connection.query(selectUserPhoneNumberQuery, phoneNumber);
    return phoneNumberRow;
}

// 회원가입
async function insertUserInfo(connection, phoneNumber) {
    const insertUserInfoQuery = `
        INSERT INTO User (phoneNumber)
        VALUE (?);
    `;
    const [createUserRow] = await connection.query(insertUserInfoQuery, phoneNumber);
    return createUserRow;
}

module.exports = {
  selectUserPhoneNumber,
  insertUserInfo
};
