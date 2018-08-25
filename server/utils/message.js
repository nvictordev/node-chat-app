let moment = require('moment');

let generateMessage = (from, text) => {
  return {
    from,
    text,
    createAt: moment().valueOf()
  };
};

let generateLocationMessage = (from, latitude, longtitude) => {
  return {
    from,
    url: `https://www.google.com/maps?q=${latitude},${longtitude}`,
    createAt: moment().valueOf()
  };
};

module.exports = {generateMessage, generateLocationMessage};