

var rest_config = {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            // label: "data",
            data: [],
            backgroundColor: [
                // '#80b3ff'

            ],
            borderColor: [
                // '#003d99'

            ],
            borderWidth: 2
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Work vs. Rest',
            fontSize: 20,
        },
        legend: {
            display: false,
            position: 'bottom'
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Score',
                    fontSize: 16,
                },
                ticks: {
                    max: 10,
                    min: 0,
                    stepSize: 1,

                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Reps',
                    fontSize: 16
                },
                ticks: {
                    beginAtZero: true,
                }

            }],
            responsive: true
        }
    }
};

var rest_canvas = document.getElementById("restBar").getContext("2d");
var rest_chart = new Chart(rest_canvas, rest_config);


function addDataToRest(index, label) {

    // data, backgroundColor, borderColor
    let details = getDetails(index);

    rest_chart.data.labels.push(label);
    // cahert.data.dataset[0].borderWidth = borderWidth;

    if (index == 1) {
        rest_config.data.datasets[0].data[0] = details.data;
        rest_config.data.datasets[0].backgroundColor[0] = details.bg;
        rest_config.data.datasets[0].borderColor[0] = details.borderColor;

    } else {
        rest_chart.data.datasets.forEach((dataset) => {
            dataset.data.push(details.data);
            dataset.backgroundColor.push(details.bg);
            dataset.borderColor.push(details.borderColor);
        });
    }
    rest_chart.update();
}


export { addDataToRest }



function getDetails(index) {

    let data;
    let bg;
    let borderColor = '#003d99';

    if (index == 1) {
        data = 4;
        bg = '#80b3ff';

    } else if (index == 2) {
        data = 9;
        bg = '#003380';

    } else if (index == 3) {
        data = 5;
        bg = '#3385ff';

    } else if (index == 4) {
        data = 7;
        bg = '#0052cc';

    } else {
        data = 6;
        bg = '#1a75ff';
    }

    return {

        data: data,
        bg: bg,
        borderColor: borderColor
    }
}


// var bp_i = 0;
// var bp_reps = 0;
// var bp_time = Number(bp_array[bp_i].time);


// let bp_interval = setInterval(function () {

//     let backgroundColor, data, label, borderColor, borderWidth;

//     var bpRep = bp_array[bp_i].bp_reps;
//     bp_i++;
//     bp_time = Number(bp_array[bp_i].time) * 700;

//     if (bpRep == 1) {
//         bp_reps++;
//         console.log(bp_reps);

//         if (bp_reps == 1) {
//             data = 4;
//             backgroundColor = '#80b3ff';

//         } else if (bp_reps == 2) {
//             data = 9;
//             backgroundColor = '#003380';

//         } else if (bp_reps == 3) {
//             data = 5;
//             backgroundColor = '#3385ff';

//         } else if (bp_reps == 4) {
//             data = 7;
//             backgroundColor = '#0052cc';

//         } else {
//             data = 6;
//             backgroundColor = '#1a75ff';
//         }

//         label = bp_reps;
//         borderColor = '#003d99';

//         addDataToBp(bp_i, rest_config, label, data, backgroundColor, borderColor);

//         if (bp_reps == 5) {
//             clearInterval(bp_interval);
//             console.log("bpRep is done");
//         }

//     }

// }, bp_time);


