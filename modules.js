// module
// every file in node is a module
// Encapculated code (only share minimum)
const name = require('./names');
const sayHi = require('./utills');
const data = require('./flavours');
require('./mind_grenade');

sayHi(name.jone);
sayHi(data.items[0])