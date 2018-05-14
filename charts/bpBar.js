


var bp_config = {
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
            borderWidth: 0
        }]
    },
    options: {
        cornerRadius: 10,
        title: {
            display: false,
            text: 'Bench Press',
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
                    display: false,
                    labelString: 'Reps',
                    fontSize: 16
                },
                ticks: {
                    beginAtZero: true,
                }

            }],
            responsive: true,
        },
    }
};

var bp_canvas = document.getElementById("bpBar").getContext("2d");
var bp_chart = new Chart(bp_canvas, bp_config);

var reps_i = 0;

function addDataToBp() {
    reps_i++;

    // data, backgroundColor, borderColor
    let details = getDetails(reps_i);

    bp_chart.data.labels.push(reps_i);
    // cahert.data.dataset[0].borderWidth = borderWidth;

    if (reps_i == 1) {
        bp_config.data.datasets[0].data[0] = details.data;
        bp_config.data.datasets[0].backgroundColor[0] = details.bg;
        bp_config.data.datasets[0].borderColor[0] = details.borderColor;
    } else {
        bp_chart.data.datasets.forEach((dataset) => {
            dataset.data.push(details.data);
            dataset.backgroundColor.push(details.bg);
            dataset.borderColor.push(details.borderColor);
        });
    }
    bp_chart.update();
}


export { addDataToBp }

//Blue style
function getDetails(index) {

    let data;
    let bg;
    let borderColor = '#003d99';

    if (index == 1) {
        data = 4;
        bg = '#2b3d52';

    } else if (index == 2) {
        data = 9;
        bg = '#2b3d52';

    } else if (index == 3) {
        data = 5;
        bg = '#2b3d52';

    } else if (index == 4) {
        data = 7;
        bg = '#2b3d52';

    } else {
        data = 6;
        bg = '#2b3d52';
    }

    return {

        data: data,
        bg: bg,
        borderColor: borderColor
    }
}

// Slack Style
// function getDetails(index) {

//     let data;
//     let bg;
//     let borderColor = '#003d99';

//     if (index == 1) {
//         data = 4;
//         bg = '#4d394b';

//     } else if (index == 2) {
//         data = 9;
//         bg = '#4d394b';

//     } else if (index == 3) {
//         data = 5;
//         bg = '#4d394b';

//     } else if (index == 4) {
//         data = 7;
//         bg = '#4d394b';

//     } else {
//         data = 6;
//         bg = '#4d394b';
//     }

//     return {

//         data: data,
//         bg: bg,
//         borderColor: borderColor
//     }
// }






// Green style
// function getDetails(index) {

//     let data;
//     let bg;
//     let borderColor = '#003d99';

//     if (index == 1) {
//         data = 4;
//         bg = '#acf08f';

//     } else if (index == 2) {
//         data = 9;
//         bg = '#005562';

//     } else if (index == 3) {
//         data = 5;
//         bg = '#10c4b5';

//     } else if (index == 4) {
//         data = 7;
//         bg = '#0e8174';

//     } else {
//         data = 6;
//         bg = '#6eba8c';
//     }

//     return {

//         data: data,
//         bg: bg,
//         borderColor: borderColor
//     }
// }


