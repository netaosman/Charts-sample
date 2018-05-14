
// var pauseTimer = document.getElementById("basicUsage");

function startTimer() {
    var timer = new Timer();
    timer.start();
    timer.addEventListener('secondsUpdated', function (e) {
        $('#basicUsage').html(timer.getTimeValues().toString());
    });

}

function stopTimer() {

    $('#basicUsage')(function () {
        timer.pause();
    });
    timer.pause();
    timer.addEventListener('secondsUpdated', function (e) {
        $('#basicUsage').html(timer.getTimeValues().toString());
    });
    // pauseTimer.pause();

}

export { startTimer, stopTimer }
