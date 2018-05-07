var fs = require("fs");


var array = fs.readFileSync('./demo_data.json', 'utf8');
// array = JSON.parse(array);

// fs.writeFileSync('./demo_data.json', JSON.stringify(object));

console.log(array[0]);

// for (let i = 0; i < 1; i++) {

//     console.log(array[i]);
// }