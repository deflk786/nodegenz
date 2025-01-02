const mysql = require('mysql');

const db = mysql.createConnection({
    host: '141.94.50.209',
    user: 'userdbds1',
    password: 'O$c@rm!kEJul101',
    database: 'dbds1'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

module.exports = db;
