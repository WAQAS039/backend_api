const lo = require('lodash');

const items = [1,[1,23,[1]]];

const newItem = lo.flattenDeep(items);
console.log(newItem);