import GoalService from '../services/GoalService';
import Util from '../utils/Utils';

const util = new Util();

export default class GoalController {
  static async getAllGoals(req, res) {
      console.log("get all ");
    try {
      const allGoals = await GoalService.getAllGoals();
      if (allGoals.length > 0) {
        util.setSuccess(200, 'Goals retrieved', allGoals);
      } else {
        util.setSuccess(200, 'No Goal found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addGoal(req, res) {
    const newGoal = req.body;
    
    try {
      const createdGoal = await GoalService.addGoal(newGoal);
      util.setSuccess(201, 'Goal Added!', createdGoal);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
  static async updatedGoal(req, res) {
    const alteredGoal = req.body;
    const  id  = req.params.id;
    if (!(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateGoal = await GoalService.updateGoal(id, alteredGoal);
      if (!updateGoal) {
        util.setError(404, `Cannot find Goal with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Goal updated', updateGoal);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAGoalByEmpID(req, res) {
    const  id  = req.params.id;
    if (!(id)) {
      util.setError(400, 'Please input a valid value');
      return util.send(res);
    }

    try {
      const theGoal = await GoalService.getAGoalByEmpID(id);

      if (!theGoal) {
        util.setError(404, `Cannot find Goal with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Goal', theGoal);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAGoalByID(req, res) {
    const  id  = req.params.id;
    if (!(id)) {
      util.setError(400, 'Please input a valid value');
      return util.send(res);
    }

    try {
      const theGoal = await GoalService.getAGoalByID(id);

      if (!theGoal) {
        util.setError(404, `Cannot find Goal with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Goal', theGoal);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }
  
  static async getAGoalStatus(req, res) {
    const status  = req.params.status;
    console.log(req.params);
    console.log(status);
    if (!(status)) {
      util.setError(400, 'Please input a valid string value');
      return util.send(res);
    }

    try {
      const theGoal = await GoalService.getAGoalStatus(status);

      if (!theGoal) {
        util.setError(404, `Cannot find Goal with the status ${status}`);
      } else {
        util.setSuccess(200, 'Found Goal', theGoal);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }
  static async deleteGoal(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const GoalToDelete = await GoalService.deleteGoal(id);

      if (GoalToDelete) {
        util.setSuccess(200, 'Goal deleted');
      } else {
        util.setError(404, `Goal with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}
