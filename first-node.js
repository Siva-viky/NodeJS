// console.log() wll print the output to the terminal/console

// fs is file server which helps create/modify/delete files
const fs = require('fs');
//using file server, we create a file and specify the content
fs.writeFileSync('hello.txt', 'Hello from Node.js');