'use strict';

const moment = require('moment');
const eventsController = require('../controllers').events;
const events = require('../models').events;
let list = [];
const checkAppointment = function (date,event){
    return Math.round(moment.duration(moment(event.start_time)
    .diff(moment(date))
  ).asMinutes()) === event.notification;
}
let condition = []
const requiresNotification = function (){
    // console.log("Yeah Yeah")
    const searchDate = new Date();
    promise1.then(function(value) {
        list = JSON.parse(JSON.stringify(value))
        // console.log(list)
        // expected output: "Success!"
      });
    // list.map(event => {
    //     console.log(checkAppointment(searchDate,event))
    // });
    condition = list.filter(function(event) {
        return checkAppointment(searchDate,event);
    });
    console.log(condition)
    // console.log(events.findAll())
};
var promise1 = new Promise(function(resolve, reject) {
    // resolve('Success!');
    resolve(events.findAll());
  });
//   promise1.then(function(value) {
//     console.log(value);
//     // expected output: "Success!"
//   });
// const Appointment = require('../models/appointment');

const notificationWorkerFactory = function() {
  return {
    run: function() {
      requiresNotification();
    },
  };
};

module.exports = notificationWorkerFactory();