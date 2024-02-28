const bcrypt = require('bcrypt');

module.exports = () => bcrypt.genSaltSync(10, 'a');
