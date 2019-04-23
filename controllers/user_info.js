const User_Info = require('../models').User_Info;
const Team_Info= require('../models').Team_Info;

module.exports = {
  list(req, res) {
    return User_Info
      .findAll()
      .then((users) => res.status(200).send(users))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return User_Info
      .findAll({
        where: {
          emp_uid: req.params.id
        }}
      )
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'user Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return User_Info
      .create({
        emp_lname: req.body.emp_lname,
        emp_fname: req.body.emp_fname,
        emp_gender: req.body.emp_gender,
        emp_email: req.body.emp_email,
        emp_avatar: req.body.emp_avatar,
        emp_role: req.body.emp_role,
        team_id: req.body.team_id,
        emp_status: req.body.emp_status,
        emp_dob: req.body.emp_dob,
        emp_pass: req.body.emp_pass,
        emp_street: req.body.emp_street,
        emp_phone: req.body.emp_phone,
        emp_city: req.body.emp_city,
        emp_postal: req.body.emp_postal,
        emp_country: req.body.emp_country,
        emp_uid: req.body.emp_uid
      })
      .then((user) => {
          res.status(201).send(user)},
          console.log(req.body)

      )
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return User_Info
      .findByPk(req.params.id, {
        include: {
          model: Team_Info,
          as: 'Team'
        },
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'user Not Found',
          });
        }
        return user
          .update({
            user_lname: req.body.user_lname || team.user_lname,
          })
          .then(() => res.status(200).send(student))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return User_Info
      .findByPk(req.params.id)
      .then(user => {
        if (!user) {
          return res.status(400).send({
            message: 'user Not Found',
          });
        }
        return user
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};