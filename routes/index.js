var express = require('express');
var router = express.Router();
const team_infoController = require('../controllers').team_info;
const user_infoController = require('../controllers').user_info;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api/teamlist', team_infoController.list);
router.get('/api/teamlist/:id', team_infoController.getById);
router.post('/api/teamlist', team_infoController.add);
router.put('/api/teamlist/:id', team_infoController.update);
router.delete('/api/teamlist/:id', team_infoController.delete);
router.post('/api/team/add_with_users', team_infoController.addWithUsers);
router.get('/api/users', user_infoController.list);
router.get('/api/users/:id', user_infoController.getById);
// router.post('/api/users', user_infoController.add);
router.post('/api/users/:id', user_infoController.update);
router.delete('/api/users/:id', user_infoController.delete);
module.exports = router;
