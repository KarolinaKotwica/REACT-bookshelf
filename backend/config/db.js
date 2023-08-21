import mysql from 'mysql';

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "haslowdupeczaslo",
    database: "books"
  });
  
export default con;