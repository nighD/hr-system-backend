const events = require('../models').events;
module.exports = {
    getById(req, res) {
        return events
          .findAll(
          )
          .then((detail) => {
            if (!detail) {
              return res.status(404).send({
                message: 'events Not Found',
              });
            }
            return res.status(200).send(detail);
          })
          .catch((error) => res.status(400).send(detail));
    },
    list(req, res) {
        return events
          .findAll().tap(console.log)
        //   .then(event => (
        //       event))
        //   .catch((error) => error);
    }
    ,

    add(req, res) {
        return events
          .create({
            members: req.body.members,
            date_att: req.body.date_att,
            title: req.body.title,
            start_time: req.body.start,
            end_time: req.body.end,
            notification: req.body.notification
            
          })
          .then((detail) => {
              res.status(201).send(detail)},
              // console.log(user)
    
          )
          .catch((error) => res.status(400).send(error));
      }
};