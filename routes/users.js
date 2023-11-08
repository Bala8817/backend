var express = require('express');
var router = express.Router();
var userController = require('../controllers/user_controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create',userController.createUser);
router.get('/view',userController.getUser);
router.put('/update',userController.updateUser);
router.delete('/delete',userController.deleteUser);


module.exports = router;
