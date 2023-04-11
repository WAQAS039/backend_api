const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);
const time = os.uptime();
console.log(time);
console.log(os.hostname())

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem()
};

console.log(currentOs);

