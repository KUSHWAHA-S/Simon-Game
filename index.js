// $("h1").html("Game Over!");
// $("h1").append("<h3>press any key to continue..</h3>");

// $("h1").html("Level "+levelNumber);
var systemArray = [];
var userChoices=[];
var startGame = false;
var level=0;

$(document).keypress(function() {
  if (!startGame) {
    $("h1").text("Level " + level);
    setTimeout(function(){
      generate();
    },500);

    startGame=true;
  }

});



$("button").click(function() {
  var currentPressButton = $(this).attr("id");
  $("#" + currentPressButton).fadeOut(20).delay(50).fadeIn(20);
  makeSound(currentPressButton);
  userChoices.push(currentPressButton);
  // console.log(userChoices);
  check(userChoices.length - 1);

});



function generate() {
  userChoices = [];
  level++;
  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4) + 1;
  var systemChoice = "btn" + randomNumber;
  systemArray.push(systemChoice);

  $(".btn" + randomNumber).fadeOut(20).delay(50).fadeIn(20);
  makeSound(systemChoice);
}


function check(currentLevel) {

  if (systemArray[currentLevel] == userChoices[currentLevel]) {
    if (systemArray.length == userChoices.length) {
      setTimeout(function () {
        generate();
      }, 1000);

    }

  } else {
    makeSound("wrong");
    $("#fullbody").addClass("game_over");
    $("h1").html("Game Over!");

    setTimeout(function() {
      $("#fullbody").removeClass("game_over");
      $("h1").html("Press Any Key to Restart");
    }, 1500);
    startOver();
  }


}

function makeSound(audioNumber) {
  var sound = new Audio("sound/" + audioNumber + ".mp3");
  sound.play();
}

function startOver() {
  level = 0;
  systemArray=[];
  startGame = false;
}
