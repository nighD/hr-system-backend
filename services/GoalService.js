// import database from '../src/models';
// const User_Info = require('../models').User_Info;
var database = require('../models');
 class GoalService {
  static async getAllGoals() {
    try {
      return await database.goals_info.findAll({
        order: [['deadline', 'DESC']]
      });
    } catch (error) {
      throw error;
    }
  }

  static async addGoal(newGoal) {
    console.log(newGoal);
    try {
      return await database.goals_info.create(newGoal);
    } catch (error) {
      throw error;
    }
  }
  static async updateGoal(id, updateGoal) {
    try {
      const GoalToUpdate = await database.goals_info.findOne({
        where: { id: id }
      });

      if (GoalToUpdate) {
        await database.goals_info.update(updateGoal, { where: { id: id } });

        return updateGoal;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAGoalByEmpID(id) {
    try {
      const theGoal = await database.goals_info.findAll({
        where: {emp_uid: id}, order: [['deadline', 'DESC']]
      });
      return theGoal;
    } catch (error) {
      throw error;
    }
  }

  static async getAGoalByID(id) {
    try {
      const theGoal = await database.goals_info.findAll({
        where: {id: id}, order: [['deadline', 'DESC']]
      });
      return theGoal;
    } catch (error) {
      throw error;
    }
  }

  static async deleteGoal(id) {
    try {
      const GoalToDelete = await database.goals_info.findOne({ where: { id: id } });

      if (GoalToDelete) {
        const deletedGoal = await database.goals_info.destroy({
          where: { id: id }
        });
        return deletedGoal;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}
export default GoalService;
