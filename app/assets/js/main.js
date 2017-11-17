$(document).foundation()

$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("body").addClass("sticky-shrinknav-wrapper");
    } else{
      $("body").removeClass("sticky-shrinknav-wrapper");
    }
  });
});


$(document).ready(function() {
	console.log("loaded");
    $("a#btn-projects").click(function() {
        //Do stuff when clicked
        $("#testing").load("projects/projects.html");
        console.log("test");
    });
});

