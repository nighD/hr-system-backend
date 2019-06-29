"use strict";

var emp_att_detail = require('../models').emp_att_detail;

module.exports = {
  getById: function getById(req, res) {
    return emp_att_detail.findAll({
      where: {
        emp_uid: req.params.id
      }
    }).then(function (detail) {
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
  add: function add(req, res) {
    return emp_att_detail.create({
      emp_uid: req.body.emp_uid,
      date_att: req.body.date_att,
      duration: req.body.duration,
      note: req.body.note,
      start_time: req.body.start_time,
      end_time: req.body.end_time
    }).then(function (detail) {
      res.status(201).send(detail);
    } // console.log(user)
    )["catch"](function (error) {
      return res.status(400).send(error);
    });
  }
};
//# sourceMappingURL=emp_att_detail.js.map