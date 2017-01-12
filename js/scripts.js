$(document).ready(function(){
  var height = parseInt(prompt("How tall are you in inches?"));

  if (height < 40) {
    $("ul#1").show();
    $("ul#1").addClass("yellow-background");
  } else if (height < 50) {
    $("ul#1").show();
    $("ul#1").addClass("yellow-background");
    $("ul#2").show();
    $("ul#2").addClass("blue-background");
  } else if (height < 60) {
    $("ul#1").show();
    $("ul#1").addClass("yellow-background");
    $("ul#2").show();
    $("ul#2").addClass("blue-background");
    $("ul#3").show();
    $("ul#3").addClass("red-background");
  } else {
    $("ul#2").show();
    $("ul#2").addClass("blue-background");
    $("ul#3").show();
    $("ul#3").addClass("red-background");
    $("ul#4").show();
    $("ul#4").addClass("green-background");
  }



});
