

var rest_config = {
    type: 'bar',
    data: {
        labels: ["Work", "Rest"],
        datasets: [
            {
                // label: "data",
                data: [0, 0],
                backgroundColor: [

                    '#2b3d52', '#dc5960'
                    //slack
                    // '#4d394b', '#dc5960'
                    // grren
                    // '#10c4b5', '#6eba8c'

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
                    display: false,
                    labelString: 'Score',
                    fontSize: 16,
                },
                ticks: {
                    max: 60,
                    min: 0,
                    // stepSize: 1,
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
            responsive: true
        }
    }
};

var rest_canvas = document.getElementById("restBar").getContext("2d");
var rest_chart = new Chart(rest_canvas, rest_config);


var reps_i = 0;
var add = 0.03;
var rest = 0.03;
function addDataToRest(work) {
    reps_i++;
    add = add + 0.03;
    rest = rest + 0.04;

    if (work) {
        rest_config.data.datasets[0].data[0] = add;

    } else {
        rest_config.data.datasets[0].data[1] = rest;
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


