const emp_att_detail = require('../models').emp_att_detail;
module.exports = {
    getById(req, res) {
        return emp_att_detail
          .findAll({
            where: {
              emp_uid: req.params.id
            }}
          )
          .then((detail) => {
            if (!detail) {
              return res.status(404).send({
                message: 'user Not Found',
              });
            }
            return res.status(200).send(detail);
          })
          .catch((error) => res.status(400).send(detail));
    },
    add(req, res) {
        return emp_att_detail
          .create({
            emp_uid: req.body.emp_uid,
            date_att: req.body.date_att,
            duration: req.body.duration,
            note: req.body.note,
            start_time: req.body.start_time,
            end_time: req.body.end_time,
            
          })
          .then((detail) => {
              res.status(201).send(detail)},
              // console.log(user)
    
          )
          .catch((error) => res.status(400).send(error));
      }
};