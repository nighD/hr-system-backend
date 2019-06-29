'use strict';

var moment = require('moment');

var eventsController = require('../controllers').events;

var events = require('../models').events;

var list = [];

var checkAppointment = function checkAppointment(date, event) {
  return Math.round(moment.duration(moment(event.start_time).diff(moment(date))).asMinutes()) === event.notification;
};

var condition = [];

var requiresNotification = function requiresNotification() {
  // console.log("Yeah Yeah")
  var searchDate = new Date();
  promise1.then(function (value) {
    list = JSON.parse(JSON.stringify(value)); // console.log(list)
    // expected output: "Success!"
  }); // list.map(event => {
  //     console.log(checkAppointment(searchDate,event))
  // });

  condition = list.filter(function (event) {
    return checkAppointment(searchDate, event);
  });
  console.log(condition); // console.log(events.findAll())
};

var promise1 = new Promise(function (resolve, reject) {
  // resolve('Success!');
  resolve(events.findAll());
}); //   promise1.then(function(value) {
//     console.log(value);
//     // expected output: "Success!"
//   });
// const Appointment = require('../models/appointment');

var notificationWorkerFactory = function notificationWorkerFactory() {
  return {
    run: function run() {
      requiresNotification();
    }
  };
};

module.exports = notificationWorkerFactory();
//# sourceMappingURL=notificationsWorker.js.map