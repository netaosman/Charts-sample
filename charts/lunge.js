


var lunge_config = {
    type: 'bar',
    data: {
        labels: [],
        datasets: [
            {
                // label: "data",
                data: [],
                backgroundColor: [],
                borderColor: [],
                borderWidth: 0
            }
            // {
            //     // label: "data",
            //     data: [],
            //     backgroundColor: [],
            //     borderColor: [],
            //     borderWidth: 0
            // }
        ]
    },
    options: {
        title: {
            display: false,
            text: 'Lunge',
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
                    labelString: 'Score',
                    fontSize: 16,
                    padding: 10

                },
                ticks: {
                    beginAtZero: true,
                }
               
            }],
            responsive: true
        }
    }
};

var l_canvas = document.getElementById("lungeBar").getContext("2d");
var l_chart = new Chart(l_canvas, lunge_config);

var reps_i = 0;
var l_or_r = 1;
var data_set = 0;

function addDataToLunge() {
    reps_i++;



    if (reps_i <= 3) {
        l_or_r = 0;
    }

    l_chart.data.labels.push(reps_i);

    // data, backgroundColor, borderColor
    let details = getDetails(reps_i);


    // cahert.data.dataset[0].borderWidth = borderWidth;

    if (reps_i == 1) {
        lunge_config.data.datasets[0].data[0] = details.data;
        lunge_config.data.datasets[0].backgroundColor[0] = details.bg;
        lunge_config.data.datasets[0].borderColor[0] = details.borderColor;

        // } else if (reps_i == 5) {
        //     lunge_config.data.datasets[1].data[0] = details.data;
        //     lunge_config.data.datasets[1].backgroundColor[0] = details.bg;
        //     lunge_config.data.datasets[1].borderColor[0] = details.borderColor;

    } else {

        // lunge_config.data.datasets[l_or_r].data.push(details.data);
        // lunge_config.data.datasets[l_or_r].backgroundColor.push(details.bg);
        // lunge_config.data.datasets[l_or_r].borderColor.push(details.borderColor);

        l_chart.data.datasets.forEach((dataset) => {
            dataset.data.push(details.data);
            dataset.backgroundColor.push(details.bg);
            dataset.borderColor.push(details.borderColor);
        });
    }
    l_chart.update();
}


export { addDataToLunge }



function getDetails(index) {

    let data;
    let bg;
    let borderColor = '#0e8174';

    if (index == 1) {
        data = 6;
        bg = '#0e8174';

    } else if (index == 2) {
        data = 5;
        bg = '#0e8174';

    } else if (index == 3) {
        data = 7;
        bg = '#0e8174';

    } else if (index == 4) {
        data = 8;
        bg = '#0e8174';
        //R
    } else if (index == 5) {
        data = 4;
        bg = '#6eba8c';

    } else if (index == 6) {
        data = 7;
        bg = '#6eba8c';
    } else if (index == 7) {
        data = 9;
        bg = '#6eba8c';
    } else if (index == 8) {
        data = 4;
        bg = '#6eba8c';
    }

    return {

        data: data,
        bg: bg,
        borderColor: borderColor
    }
}


