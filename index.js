const _ = require('lodash');

function transformText(text) {
const upperCaseText = text. toUpperCase();

return _.camelCase(upperCaseText) ;

module.exports = transformText;
