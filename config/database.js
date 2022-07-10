const mysql = require('mysql2/promise');
const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: 'study-db.cwdtveyqmxzl.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    port: '3306',
    password: 'ssk338389',
    database: 'studyDB'
});

module.exports = {
    pool: pool
};