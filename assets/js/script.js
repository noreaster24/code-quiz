
document.addEventListener('DOMContentLoaded', () => {
    var timeLeftDisplay = document.querySelector('#time-left');
    var startBtn = document.querySelector('#start-button');
    timeLeft = 60;

    function countDown() {
        setInterval(function(){
            if (timeLeft <= 0) {
                clearInterval(timeLeft = 0);
            }
            timeLeftDisplay.innerHTML = timeLeft;
            timeLeft -=1;
        }, 1000);
    };


startBtn.addEventListener('click', countDown);
startBtn.addEventListener('click', questionsStart);

});
