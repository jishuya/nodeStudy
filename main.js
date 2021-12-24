
const fs = require('fs');

let fileList = fs.readdirSync('.');
console.log(fileList)

let newFile = fs.writeFileSync('newFile', 'Hello! nodejs!')

const os = require('os');
console.log(os.cpus())

