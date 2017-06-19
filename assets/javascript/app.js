$(document).ready(function() {

//Sets click event for beer bottle
  $("#beer").on("click", function() {
    //Hides beer bottle after click
    
    //Removes hidden class from the question-answer and timer panel divs
    $(".QApanel, .timerPanel, .btn-primary, #nextButton").removeClass("hidden");
    //Calls countDown function to initiate timer
    countDown(30, "timer");


   //Defines questions variable and subsequent objects
   var questions = [{
    question: 'What year was the University of Texas founded',
    choices: ['1910', '1881', '1790', '1847'],
    correctAnswer: 1
   },
   {
    question: 'What was the first year of Austin City Limits music fesitval?',
    choices: ['2002', '2000', '1980', '1998'],
    correctAnswer: 0
   },
   {
    question: 'Who is the statue of in front of the Mooody Theater',
    choices: ['George Moody', 'Steven F Austin', 'Stevie Ray Vaughn', 'Willie Nelson'],
    correctAnswer: 3
   },
   {
    question: 'What is Austin considered being',
    choices: ['The home of Elivs Presley', 'A place with low traffic', 'The live music capital of the world', 'The best city to record an album'],
    correctAnswer: 2
   },
   {
    question: 'What animal only lives in Barton Springs Pool',
    choices: ['Atelopus Frog', 'Four lined Snake', 'LungLess Salamander ', 'Eurycea Sosorum Salamander'],
    correctAnswer: 3
   }];


   //Reference to HTML tags
  var questionPanel = document.getElementById('questionPanel');
  var choicesList = document.getElementById('choicesList');
  var nextButton = document.getElementById('nextButton');

  //Other variables
var currentQuestion = {};
var usedQuestions = [];
var gameInterval;
var timeInterval;

  //Other variables
  var i = 0;
  var lengthL = questions.length;
  var buttonName = "question"+i+"_choices";

  //User variables
  


  //Itterate through questions when next button is clicked
  nextButton.onclick = function() {
    if (i > questions.length -1) {//go back to first question when finished
      i = 0;
    }
    nextQuestion(i);
    i++;
  };



  function createLi(name, choiceText) {
        var e = document.createElement('li');
        var radioBtnHtml = '<input type="radio" id="radioButton" name="' + name + '"';    
        radioBtnHtml += '/>';
        radioBtnHtml += choiceText;        
        e.innerHTML = radioBtnHtml;        
        return e;
  };


  document.getElementById("question"+i+"_choices").click(function() {
    alert("AHHHHHHHHHHHHH");
  });


  function nextQuestion(qNum) {
    var individualQuestion = questions[i];
    questionPanel.innerText = individualQuestion.question;

    choicesList.innerHTML = ""; //Resets choices list
    for (key in individualQuestion.choices) {
       var buttonName = "question"+i+"_choices";
       var choiceText = individualQuestion.choices[key];
       choicesList.appendChild(createLi(buttonName,choiceText));
    };

  };


  });

});

  //var timer = setTimeout('countDown('+secs+', "'+elem+'")', 1000);

  //Function for timer
  function countDown(secs,elem) {
    var element = document.getElementById(elem);
    element.innerHTML = "Time Remaining: " + secs + " seconds"
    secs--;
    var timer = setTimeout('countDown('+secs+', "'+elem+'")', 1000);
    if (secs < 1){
      clearTimeout(timer);
      element.innerHTML = '<h2>Countdown complete!</h2>';
      element.innerHTML += "<a href='#'>Click here now</a>";
    };
  };
