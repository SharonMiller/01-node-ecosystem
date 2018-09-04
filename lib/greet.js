'use strict';
module.exports = exports = {};

exports.hello = (world) => {
  if (typeof world  !== 'string') return null;
  return `hello ${world}`;
};
