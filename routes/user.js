const UserCtrl = require('../controller/userCtrl');
const express = require('express');
const router = express.Router();

router.post('/reg', UserCtrl.reg);

module.exports = router;
