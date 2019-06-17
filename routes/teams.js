import { Router } from 'express';
import TeamController from '../controllers/TeamController';

const router = Router();

router.get('/', TeamController.getAllTeams);
router.post('/', TeamController.addTeam);
router.get('/:id', TeamController.getATeam);
router.get('/manager/:id', TeamController.getATeamManager);
router.put('/:id', TeamController.updatedTeam);
// router.delete('/:id', TeamController.deleteTeam);

export default router;