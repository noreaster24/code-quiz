var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
var questionsEl = document.getElementById('questions');
// Starting score
var score = 0;

// Quiz questions array with the correct answers
var questions = [
    {
        question: "What tag can be used to insert a line break or blank line in an HTML document?\n(a) <br></br>\n\(b) <body></body>\n\(c) <head></head>",
        answer: "a"
    },
    {
        question: "What does CSS stand for?\n(a) Computer Shared Sheets\n\(b) Cascading Style Sheets\n\(c) Customers Sound Stupid",
        answer: "b"
    },
    {
        question: "What's the correct tag for the largest heading?\n(a) Heading\n\(b) Head\n\(c) H1",
        answer: "c"
    },
    {
        question: "What's the correct HTML tag to make text bold?\n(a) B\n\(b) bold\n\(c) Bld",
        answer: "b"
    },
    {
        question: "What are the CSS properties that are used toa dd space around sections of content?\n(a) Cleaner\n\(b) Spacing\n\(c) Padding",
        answer: "c"
    },
    {
        question: "True or False: It is possible to make a webpage that adapts to different size screens.\n(a) True\n\(b) False\n\(c) Trick Question",
        answer: "b"
    },
    {
        question: "What kind of JS statement is used to execute actions based on a trigger or condition?\n(a) Conditional Statement\n\(b) Boolean Variable\n\(c) Fired Event",
        answer: "a"
    },
    {
        question: "In JS, what element is used to store and manipulate text, usually in multiple?\n(a) Strings\n\(b) Arrays\n\(c) Variables",
        answer: "a"
    },
    {
        question: "In JS, what element is used to store multiple values in a single variable?\n(a) Functions\n\(b) Variables\n\(c) Strings",
        answer: "c"
    },
    {
        question: "What is the format called for storing and transporting data?\n(a) JSON\n\(b) Syntax\n\(c) HTML",
        answer: "a"
    },
]

// timer that counts down from 60
function countDown() {
    var timeLeft = 60;

    var timerInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
}
 startBtn.onclick = countdown;

// // Countdown function when start button is pressed
// document.addEventListener('DOMContentLoaded', () => {
//     var timeLeftDisplay = document.querySelector('#time-left')
//     var startBtn = document.querySelector('#start-btn btn')
//     timeLeft = 60;

//     function countDown() {
//         setInterval(function () {
//             if (timeLeft <= 0) {
//                 clearInterval(timeLeft = 0)
//             }
//             timeLeftDisplay.innerHTML = timeLeft
//             timeLeft -= 1
//         }, 1000)
//     }

// startBtn.addEventListener('click', countDown);

// })

    // // Loop for every question
    // function questionsStart() {
    //     for (var i = 0; i < questions.length; i++) {
    //         var response = window.prompt(questions[i].question);
    //         if (response === questions[i].answer) {
    //             score++;
    //             alert("Correct!");
    //         } else {
    //             alert("Sorry, wrong answer");
    //             timeLeft - 5;
    //         }
    //     }
    //     };
    // });



