var csvjson = require('csvjson');
var fs = require("fs");


var csv = fs.readFileSync('./demo_data.csv', 'utf8');


var options = {
    delimiter: ',', // optional
    quote: '"' // optional
};

var object = csvjson.toObject(csv, options);

fs.writeFileSync('./demo_data.json', JSON.stringify(object));