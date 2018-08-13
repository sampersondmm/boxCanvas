const express = require('express');
const router = express.Router();
const { signup, signin } = require('../handlers/auth');

router.use('/signup', signup);
router.use('/signin', signin);

module.exports = router;
