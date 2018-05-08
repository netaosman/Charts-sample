
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
                '#003d99'

            ],
            borderWidth: 2
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Bench Press',
            fontSize: 16,
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
                    fontSize: 14,
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
                    labelString: 'bp_Reps',
                    fontSize: 14
                },
                ticks: {
                    beginAtZero: true,
                }

            }],
            responsive: true
        }
    }
};

var bp_canvas = document.getElementById("bpBar").getContext("2d");
var bp_chart = new Chart(bp_canvas, bp_config);


function addDataToBp(i, label, data, backgroundColor, borderColor) {

    bp_chart.data.labels.push(label);
    // cahert.data.dataset[0].borderWidth = borderWidth;

    if (i == 1) {
        bp_config.data.datasets[0].data[0] = data;
    } else {
        bp_chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
            dataset.backgroundColor.push(backgroundColor);
            dataset.borderColor.push(borderColor);
        });
    }
    bp_chart.update();
}



export { addDataToBp }


