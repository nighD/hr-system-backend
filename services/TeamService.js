// import database from '../src/models';
// const User_Info = require('../models').User_Info;
var database = require('../models');
 class TeamService {
  static async getAllTeams() {
    try {
      return await database.Team_Info.findAll({
        include: [{
            model: database.User_Info
          }]
      });
    } catch (error) {
      throw error;
    }
  }

  static async addTeam(newTeam) {
    try {
      return await database.Team_Info.create(newTeam);
    } catch (error) {
      throw error;
    }
  }

  static async updateTeam(id, updateTeam) {
    try {
      const TeamToUpdate = await database.Team_Info.findOne({
        where: { id: id }
      });

      if (TeamToUpdate) {
        await database.Team_Info.update(updateTeam, { where: { id: id } });

        return updateUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getATeam(id) {
    try {
      const theTeam = await database.Team_Info.findAll({
        where: {id: id},
        include: [{
            model: database.User_Info
          }]
      
      });

      return theTeam;
    } catch (error) {
      throw error;
    }
  }
  static async getATeamManager(id) {
    try {
      const theTeam = await database.Team_Info.findAll({
        where: {id: id},
        include: [{
            model: database.User_Info,
            where: {
                emp_role:'manager'
            }
          }]
      
      });

      return theTeam;
    } catch (error) {
      throw error;
    }
  }

  static async deleteTeam(id) {
    try {
      const TeamToDelete = await database.Team_Info.findOne({ where: { id: id } });

      if (TeamToDelete) {
        const deletedTeam = await database.Team_Info.destroy({
          where: { id: id }
        });
        return deletedTeam;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}
export default TeamService;
