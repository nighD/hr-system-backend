'use strict';

var CronJob = require('cron').CronJob;

var notificationsWorker = require('./workers/notificationsWorker');

var moment = require('moment');

var schedulerFactory = function schedulerFactory() {
  return {
    start: function start() {
      new CronJob("* * * * *", function () {
        console.log('Running Send Notifications Worker for ' + moment().format());
        notificationsWorker.run();
      }, null, true, '');
    }
  };
};

module.exports = schedulerFactory();
//# sourceMappingURL=scheduler.js.map