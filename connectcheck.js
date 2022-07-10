var mysql      = require('mysql');
const connection = mysql.createPool({
    host: 'study-db.cwdtveyqmxzl.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    port: '3306',
    password: 'ssk338389',
    database: 'studyDB'
});

connection.connect();

connection.query('SELECT * FROM User', function(err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});

connection.end();