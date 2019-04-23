const User_Info = require('../models').User_Info;
const Team_Info = require('../models').Team_Info;

module.exports = {
  list(req, res) {
    return Team_Info
      .findAll({
        include: [{
          model: User_Info,
          as: 'members'
        }],
        order: [
          ['createdAt', 'DESC'],
          [{ model: User_Info, as: 'members' }, 'createdAt', 'DESC'],
        ],
      })
      .then((team_infos) => res.status(200).send(team_infos))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Team_Info
      .findByPk(req.params.id, {
        include: [{
          model: User_Info
        }],
      })
      .then((team) => {
        if (!team) {
          return res.status(404).send({
            message: 'Team Not Found',
          });
        }
        return res.status(200).send(team);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Team_Info
      .create({
        team_name: req.body.team_name,
        team_dis: req.body.team_dis,
        team_status: req.body.team_status,
      })
      .then((team) => res.status(201).send(team))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Team_Info
      .findByPk(req.params.id, {
        include: [{
          model: User_Info,
          as: 'members'
        }],
      })
      .then(team => {
        if (!team) {
          return res.status(404).send({
            message: 'Team Not Found',
          });
        }
        return team
          .update({
            team_name: req.body.team_name || team.team_name,
          })
          .then(() => res.status(200).send(team))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Team_Info
      .findByPk(req.params.id)
      .then(team => {
        if (!team) {
          return res.status(400).send({
            message: 'Team Not Found',
          });
        }
        return Team_Info
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  addWithUsers(req, res) {
    return Team_Info
      .create({
        team_name: req.body.team_name,
        members: req.body.members,
      }, {
        include: [{
          model: User_Info,
          as: 'members'
        }]
      })
      .then((team) => res.status(201).send(team))
      .catch((error) => res.status(400).send(error));
  },
};