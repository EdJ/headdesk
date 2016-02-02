const fs = require('fs');

const picture = fs.readFileSync('./headdesk.txt', 'utf-8');

console.log(picture);
