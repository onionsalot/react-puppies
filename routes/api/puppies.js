const express = require('express');
const router = express.Router();
const puppiesCtrl = require('../../controllers/api/puppies');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// Insert ensuredLoggedIn on all routes

// GET .api.users.check-token
router.get('/',puppiesCtrl.index)
router.get('/', puppiesCtrl.show)

// POST /api/users
router.post('/', puppiesCtrl.create)

router.put('/:id', puppiesCtrl.update)

router.delete('/:id', puppiesCtrl.delete)

module.exports = router;