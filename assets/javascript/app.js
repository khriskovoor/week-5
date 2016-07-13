var panel = $('#quiz-area');

$(document).on('click', '#start', function(e) {
  game.start();
});

$(document).on('click', '#done', function(e) {
  game.done();
});

var questions = [{
  question: "How old is Bart ?",
  answers: ["24", "32", "10", "11"],
  correctAnswer: "10"
}, {
  question: "The Simpsons live on the following street...",
  answers: ["Woodview Terrace", "Pine Tree Terrace", "State Street", "Evergreen Terrace"],
  correctAnswer: "Evergreen Terrace"
}, {
  question: "Homer Simpsons occupation is a...",
  answers: ["Telephone Repair Man", "IRS Collection Agent", "Nuclear Power Plant Saftey Inspector", "City Bus Driver"],
  correctAnswer: "Nuclear Power Plant Saftey Inspector"
}, {
  question: 'Which of the following characters is a non-smoker ??',
  answers: ["Krusty", "Nelson", "Grandpa Simpson", "Mrs. Krabapple"],
  correctAnswer: "Grandpa Simpson"
}, {
  question: 'Which of the following names did Bart not use in a prank call to Moe ?',
  answers: ["Ivana Tinkle", "Bea O'Problem", "Amanda Huggenkiss", "Hugh Johnson"],
  correctAnswer: "Hugh Johnson"
}, {
  question: 'Who shot Mr. Burns ?',
  answers: ["Bart", "Homer", "Maggie", "Lisa"],
  correctAnswer: "Maggie"
}, {
  question: "Name the cinema in Springfield ?",
  answers: ["Googolplex", "Monties Movies", "Mega Movies", "Springfield Screen"],
  correctAnswer: "Googolplex"
}, {
  question: "What was the secret ingredient in a Flaming Moe/Homer ?",
  answers: ["Bleach", "Cough Syrup", "Denture Cleaner", "Shampoo"],
  correctAnswer: "Cough Syrup"
}, {
  question: "Who repeated the 4th grade ?",
  answers: ["Moe", "Homer", "Otto", "Grandpa Simpson"],
  correctAnswer: "Otto"
}];

var game = {
  correct:0,
  incorrect:0,
  counter:120,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIMES UP');
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);

    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">120</span> Seconds</h2>');
    $('#start').remove();


    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }

    panel.append('<button id="done">Done</button>');
  },
  done: function() {


    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[8].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    
    this.result();
  },
    result: function() {

    clearInterval(timer);

    $('#subwrapper h2').remove();
    panel.html('<h2>All Done!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
  }

};