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
    $("a#btn-about").click(function() {
      console.log("in about");
        $("main").load("projects/about.html .maincontent");
        $('body').css('overflow','scroll');
    });

    $("a#btn-projects").click(function() {
      console.log("in projects");
        $("main").load("projects/projects.html .maincontent");
        $('body').css('overflow','scroll');
    });
});

