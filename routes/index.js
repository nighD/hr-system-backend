var express = require('express');
var router = express.Router();
const team_infoController = require('../controllers').team_info;
// const UserController = require('../controllers/UserController');
import UserController from '../controllers/UserController';
const emp_att_detailController = require('../controllers').emp_att_detail;
const eventsController = require('../controllers').events;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.get('/api/teamlist', team_infoController.list);
// router.get('/api/teamlist/:id', team_infoController.getById);
// router.post('/api/teamlist', team_infoController.add);
// router.put('/api/teamlist/:id', team_infoController.update);
// router.delete('/api/teamlist/:id', team_infoController.delete);
router.post('/api/team/add_with_users', team_infoController.addWithUsers);
// router.get('/api/users',UserController.getAllUser);
// router.get('/api/users/:id', UserController.getAUser);
// router.post('/api/users', user_infoController.addUser);
// router.post('/api/users/:id', user_infoController.updatedUser);
// router.delete('/api/users/:id', user_infoController.deleteUser);
router.get('/api/emp_att_detail/:id', emp_att_detailController.getById);
router.post('/api/emp_att_detail', emp_att_detailController.add);
router.get('/api/events', eventsController.getById);
router.post('/api/events', eventsController.add);
export default router;
