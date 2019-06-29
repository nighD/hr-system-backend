"use strict";

var events = require('../models').events;

module.exports = {
  getById: function getById(req, res) {
    return events.findAll().then(function (detail) {
      if (!detail) {
        return res.status(404).send({
          message: 'user Not Found'
        });
      }

      return res.status(200).send(detail);
    })["catch"](function (error) {
      return res.status(400).send(detail);
    });
  },
  list: function list(req, res) {
    return events.findAll().tap(console.log); //   .then(event => (
    //       event))
    //   .catch((error) => error);
  },
  add: function add(req, res) {
    return events.create({
      members: req.body.members,
      date_att: req.body.date_att,
      title: req.body.title,
      start_time: req.body.start,
      end_time: req.body.end,
      notification: req.body.notification
    }).then(function (detail) {
      res.status(201).send(detail);
    } // console.log(user)
    )["catch"](function (error) {
      return res.status(400).send(error);
    });
  }
};
//# sourceMappingURL=events.js.map