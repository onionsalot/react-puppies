const express = require('express');
const router = express.Router();
const puppiesCtrl = require('../../controllers/api/puppies');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// Insert ensuredLoggedIn on all routes

// GET .api.users.check-token
router.get('/',puppiesCtrl.index)

// POST /api/users


module.exports = router;