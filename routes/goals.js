import { Router } from 'express';
import GoalController from '../controllers/GoalController';

const router = Router();

router.get('/', GoalController.getAllGoals);
router.post('/', GoalController.addGoal);
router.get('/emp/:id', GoalController.getAGoalByEmpID);
router.get('/:id', GoalController.getAGoalByID);
router.put('/:id', GoalController.updatedGoal);
// router.delete('/:id', LeaveController.deleteLeave);

export default router;