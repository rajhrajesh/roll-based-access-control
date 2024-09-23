const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/authMiddleware');
const authorizeRoles = require('../middlewares/roleMiddleware')
const { verify } = require('jsonwebtoken');

router.get('/admin',verifyToken,authorizeRoles('admin'), (req, res) => {
    res.json({ message: 'Welcome Admin' })
})

router.get('/manager',verifyToken, authorizeRoles('admin','manager'), (req, res) => {
    res.json({ message: 'Welcome Manager' })
})

router.get('/user',verifyToken,authorizeRoles('admin','manager','user'), (req, res) => {
    res.json({ message: 'Welcome User' })
})

module.exports = router;