const pug = require('pug');

module.exports = jadeTemplate => {
  return pug.render(jadeTemplate, {});
};

module.exports.raw = true;