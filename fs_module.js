const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync("./content/first.txt",'utf-8');
console.log(first);

const second = readFileSync("./content/second.txt","utf-8");
console.log(second);

// writeFileSync('./content/third.txt',`here is the result:${first} ${second}`);

writeFileSync('./content/third.txt',`here is the result:${first} ${second}`,{
    flag:'a' // to append new text two a file
});