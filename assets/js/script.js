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

// Timer that counts down from 60
function countdown() {
    var timeLeft = 60;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
            displayMessage();
        }
    }, 1000);
}

startBtn.onclick = countdown;

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
