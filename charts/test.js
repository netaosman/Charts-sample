var fs = require("fs");


var array = fs.readFileSync('./demo_data.json', 'utf8');

array = JSON.parse(array);

var newArray = [];
var exer;

for (let index = 0; index < array.length; index++) {
    const element = array[index];

    exer = getExercises(element);

    var obj = {

        frame: element.frame,
        time: element.time,
        work_time: element.work_time,
        exer: exer
    }

    newArray.push(obj);

}


fs.writeFileSync('./new_demo_data.json', JSON.stringify(newArray));


function getExercises(element) {
    var exer;

    if (element.bp_reps == 1) {
        exer = 'bp_reps';

    } else if (element.ll_reps == 1) {
        exer = 'll_reps';

    } else if (element.rl_reps == 1) {
        exer = 'rl_reps';

    } else if (element.s_reps == 1) {
        exer = 's_reps';

    } else {
        exer = 'rest';

    }
    return exer;
}