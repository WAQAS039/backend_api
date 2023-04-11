const path = require('path');

console.log(path.sep);
// join paths and return like this fol/fol
console.log(path.join('BACKEND'));
// means first path 
// like fol/fol/text.txt so it will return text.txt
console.log(path.basename(path.join('BACKEND')));
// for absolute path
console.log(path.resolve(__dirname,'BACKEND'))