
var welcomeEl = document.getElementById('welcome');
var timerEl = document.getElementById('countdown');
var quizEl = document.getElementById('main');
var choiceA = document.getElementById('a');
var choiceB = document.getElementById('b');
var choiceC = document.getElementById('c');
var startBtn = document.getElementById('start');
var questionsEl = document.getElementById('container');
// Starting score
var score = 0;

welcomeEl.classList.remove('hide')

// Build the quiz with the question array
function buildQuiz() {
    welcomeEl.classList.add('hide');
    questionsEl.classList.remove('hide');
    // Variable to store the HTML output
    const output = [];
    
    questionStart();

    // Loop for every question
    questionsStart(question[i].question); {
        

        
    };

// Show the results of the quiz
function showResults() {



}

function questionStart() {
    for (var i = 0; i < myQuestions.length; i++) {
        var response = window.prompt(MyQuestions[i].question);
        if (response === questions[i].correctAnswer) {
            score++;
            alert("Correct!");
        } else {
            alert("Sorry, wrong answer");
            // timeLeft - 5;
        }
    }
    };
}

// Quiz questions array with the correct answers
const myQuestions = [
    {
        question: "What tag can be used to insert a line break or blank line in an HTML document?",
        answers: {
            a: "<br></br>",
            b: "<break></break>",
            c: "<new></new>",
        },
        correctAnswer: "a"
    },
    {
        question: "What does CSS stand for?",
        answers: {
            a: "Computer Shared Sheets",
            b: "Cascading Style Sheets",
            c: "Customers Sound Stupid",
        },
        correctAnswer: "b"
    },
    {
        question: "What's the correct tag for the largest heading?\n(a) Heading\n\(b) Head\n\(c) H1",
        answers: {
            a: "Heading",
            b: "Head",
            c: "H1",
        },
        correctAnswer: "c"
    },
    {
        question: "What's the correct HTML tag to make text bold?",
        answers: {
            a: "B",
            b: "bold",
            c: "Bld",
        },
        correctAnswer: "c"
    },
    {
        question: "What are the CSS properties that are used toa dd space around sections of content?",
        answers: {
            a: "Cleaner",
            b: "Spacing",
            c: "Padding",
        },
        correctAnswer: "c"
    },
    {
        question: "True or False: It is possible to make a webpage that adapts to different size screens.",
        answers: {
            a: "True",
            b: "False",
            c: "Trick Question",
        },
        correctAnswer: "a"
    },
    {
        question: "What kind of JS statement is used to execute actions based on a trigger or condition?",
        answers: {
            a: "Conditional Statement",
            b: "Boolean Variable",
            c: "Fired Event",
        },
        correctAnswer: "a"
    },
    {
        question: "In JS, what element is used to store and manipulate text, usually in multiple?",
        answers: {
            a: "Strings",
            b: "Arrays",
            c: "Variables",
        },
        correctAnswer: "a"
    },
    {
        question: "In JS, what element is used to store multiple values in a single variable?",
        answers: {
            a: "Functions",
            b: "Variables",
            c: "Arrays",
        },
        correctAnswer: "c"
    },
    {
        question: "What is the format called for storing and transporting data?\n(a) JSON\n\(b) Syntax\n\(c) HTML",
        answers: {
            a: "JSON",
            b: "Syntax",
            c: "HTML",
        },
        correctAnswer: "a"
    },
]

// Timer that counts down from 60
function countdown() {
    var timeLeft = 60;
    buildQuiz();
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

function displayMessage() {
    alert("Time's up!  Let's see how you did.");
    questionsEl.classList.add('hide');
}

startBtn.onclick = countdown;


