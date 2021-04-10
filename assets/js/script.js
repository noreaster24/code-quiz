// Quiz questions array with the correct answers
var questions = [
    { question: "What tag can be used to insert a line break or blank line in an HTML document?\n(a) <br></br>\n\(b) <body></body>\n\(c) <head></head>", 
    answer: "a" },
    // { question: "", 
    // answer: "" },
    // { question: "", 
    // answer: "" },
    // { question: "", 
    // answer: "" },
    // { question: "", 
    // answer: "" },
    // { question: "", 
    // answer: "" },
    // { question: "", 
    // answer: "" },
    // { question: "", 
    // answer: "" },
    // { question: "", 
    // answer: "" },
    // { question: "", 
    // answer: "" },
]

// Starting score
var score = 0;

// Countdown function when start button is pressed
document.addEventListener('DOMContentLoaded', () => {
    var timeLeftDisplay = document.querySelector('#time-left');
    var startBtn = document.querySelector('#start-btn btn');
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

    function questionsStart() {
        for (var i = 0; i < questions.length; i++) {
            var response = window.prompt(questions[i].question);
            if (response === questions[i].answer) {
                score++;
                alert("Correct!");
            } else {
                alert("Sorry, wrong answer");
                timeLeft -5;
            }
        }
        };
    });


startBtn.addEventListener('click', countDown);
startBtn.addEventListener('click', questionsStart);

