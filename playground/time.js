let moment = require('moment');

let someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

let createAt = 100;
let date = moment(createAt);

console.log(date.format('MMM Do YYYY'));