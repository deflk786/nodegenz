const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM ntctable', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed.' });
        }
        res.json(results);
    });
});

module.exports = router;
