$(document).ready(function(){
  var height = parseInt(prompt("How tall are you in inches?"));

  if (height < 40) {
    $("li.1").show();
  } else if (height < 50) {
    $("li.1").show();
    $("li.2").show();
  } else if (height < 60) {
    $("li.1").show();
    $("li.2").show();
    $("li.3").show();
  } else {
    $("li.2").show();
    $("li.3").show();
    $("li.4").show();
  }



});
