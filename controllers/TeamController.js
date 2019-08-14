import TeamService from '../services/TeamService';
import Util from '../utils/Utils';

const util = new Util();

export default class TeamController {
  static async getAllTeams(req, res) {
    try {
      const allTeams = await TeamService.getAllTeams();
      if (allTeams.length > 0) {
        util.setSuccess(200, 'Teams retrieved', allTeams);
      } else {
        util.setSuccess(200, 'No Team found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addTeam(req, res) {
    // if (!req.body.emp_lname || !req.body.emp_fname || !req.body.emp_gender || !req.body.emp_fname || !req.body.emp_gender) {
    //   util.setError(400, 'Please provide complete details');
    //   return util.send(res);
    // }
    const newTeam = req.body;
    try {
      const createdTeam = await TeamService.addTeam(newTeam);
      util.setSuccess(201, 'Team Added!', createdTeam);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedTeam(req, res) {
    const alteredTeam = req.body;
    const  id  = req.params.id;
    if (!(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateTeam = await TeamService.updateTeam(id, alteredTeam);
      if (!updateTeam) {
        util.setError(404, `Cannot find Team with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Team updated', updateTeam);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getATeam(req, res) {
    const  id  = req.params.id;
    console.log(req.params.id);
    console.log(id);
    if (!(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theTeam = await TeamService.getATeam(id);

      if (!theTeam) {
        util.setError(404, `Cannot find Team with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found User', theTeam);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }
  static async getATeamManager(req, res) {
    const  id  = req.params.id;
    if (!(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theTeam = await TeamService.getATeamManager(id);

      if (!theTeam) {
        util.setError(404, `Cannot find Team Manager with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found User', theTeam);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }
  static async deleteTeam(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const teamToDelete = await TeamService.deleteTeam(id);

      if (teamToDelete) {
        util.setSuccess(200, 'Team deleted');
      } else {
        util.setError(404, `Team with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}
