const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/profile/:index', ctrl.users.getProfile);

router.post('/', ctrl.users.signup);
router.post('/login', ctrl.users.login);

module.exports = router;