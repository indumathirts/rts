const express = require('express');
const router = express.Router();
// const auth = require('../middlewares/auth.middleware');
const userController = require('../controllers/user.controller');

// router.use(auth);


router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
