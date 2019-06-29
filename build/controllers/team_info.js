"use strict";

var User_Info = require('../models').User_Info;

var Team_Info = require('../models').Team_Info;

module.exports = {
  list: function list(req, res) {
    return Team_Info.findAll({
      include: [{
        model: User_Info
      }],
      order: [['createdAt', 'DESC'], [{
        model: User_Info
      }, 'createdAt', 'DESC']]
    }).then(function (team_infos) {
      return res.status(200).send(team_infos);
    })["catch"](function (error) {
      res.status(400).send(error);
    });
  },
  getById: function getById(req, res) {
    return Team_Info.findByPk(req.params.id, {
      include: [{
        model: User_Info
      }]
    }).then(function (team) {
      if (!team) {
        return res.status(404).send({
          message: 'Team Not Found'
        });
      }

      return res.status(200).send(team);
    })["catch"](function (error) {
      return res.status(400).send(error);
    });
  },
  add: function add(req, res) {
    return Team_Info.create({
      team_name: req.body.team_name,
      team_dis: req.body.team_dis,
      team_status: req.body.team_status
    }).then(function (team) {
      return res.status(201).send(team);
    })["catch"](function (error) {
      return res.status(400).send(error);
    });
  },
  update: function update(req, res) {
    return Team_Info.findByPk(req.params.id, {
      include: [{
        model: User_Info,
        as: 'members'
      }]
    }).then(function (team) {
      if (!team) {
        return res.status(404).send({
          message: 'Team Not Found'
        });
      }

      return team.update({
        team_name: req.body.team_name || team.team_name
      }).then(function () {
        return res.status(200).send(team);
      })["catch"](function (error) {
        return res.status(400).send(error);
      });
    })["catch"](function (error) {
      return res.status(400).send(error);
    });
  },
  "delete": function _delete(req, res) {
    return Team_Info.findByPk(req.params.id).then(function (team) {
      if (!team) {
        return res.status(400).send({
          message: 'Team Not Found'
        });
      }

      return Team_Info.destroy().then(function () {
        return res.status(204).send();
      })["catch"](function (error) {
        return res.status(400).send(error);
      });
    })["catch"](function (error) {
      return res.status(400).send(error);
    });
  },
  addWithUsers: function addWithUsers(req, res) {
    return Team_Info.create({
      team_name: req.body.team_name,
      members: req.body.members
    }, {
      include: [{
        model: User_Info,
        as: 'members'
      }]
    }).then(function (team) {
      return res.status(201).send(team);
    })["catch"](function (error) {
      return res.status(400).send(error);
    });
  }
};
//# sourceMappingURL=team_info.js.map