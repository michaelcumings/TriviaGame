// Code for Quiz
// This code will run after the page loads:
window.onload = function() {
    $("#startbtn").on("click", timer.start);
  };

//  Variable that will hold our setInterval that runs the timer
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our timer object
var timer = {

  time: 0,
  start: function() {
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("quiz").style.visibility = "visible";
    timer.time = 45;
    $("#seconds").text(timer.time);
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(timer.count, 1000);
      clockRunning = true;
    }
  },
  count: function() {

    // decrement time by 1
    timer.time--;
    // show the converted time in the "seconds" div.
    $("#seconds").text(timer.time);
    // When timer reaches zero, end the game as if the button had been pressed
    if (timer.time <= 0) {
        tabulate();
        return;
    }
  },
};

function tabulate() {
    var question1 = document.quizqns.question1.value;
    var question2 = document.quizqns.question2.value;
    var question3 = document.quizqns.question3.value;
    var question4 = document.quizqns.question4.value;
    var question5 = document.quizqns.question5.value;
    var question6 = document.quizqns.question6.value;
    var question7 = document.quizqns.question7.value;
    var question8 = document.quizqns.question8.value;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    if (question1 === "ChaosTheory") {
        correct++;
    } else if (question1 === "") {
        unanswered++;
    } else {
        incorrect++;
    }

    if (question2 === "Kit") {
        correct++;
    } else if (question2 === "") {
        unanswered++;
    } else {
        incorrect++;
    }

    if (question3 === "Reina") {
        correct++;
    } else if (question3 === "") {
        unanswered++;
    } else {
        incorrect++;
    }

    if (question4 === "Hayley") {
        correct++;
    } else if (question4 === "") {
        unanswered++;
    } else {
        incorrect++;
    }

    if (question5 === "Null") {
        correct++;
    } else if (question5 === "") {
        unanswered++;
    } else {
        incorrect++;
    }

    if (question6 === "Khan") {
        correct++;
    } else if (question6 === "") {
        unanswered++;
    } else {
        incorrect++;
    }

    if (question7 === "Maxx") {
        correct++;
    } else if (question7 === "") {
        unanswered++;
    } else {
        incorrect++;
    }

    if (question8 === "Noise") {
        correct++;
    } else if (question8 === "") {
        unanswered++;
    } else {
        incorrect++;
    }

    var resultstext = 
    `<h2>All Done!</h2>
    <p>Correct answers: ${correct}</p>
    <p>Incorrect answers: ${incorrect}</p>
    <p>Unanswered: ${unanswered}</p>`;
    
    $("#quiz").html(resultstext);

    
}