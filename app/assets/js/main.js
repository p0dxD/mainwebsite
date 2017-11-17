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
        $("#testing").load("projects/about.html");
        $('body').css('overflow','hidden');
    });

    $("a#btn-projects").click(function() {
        $("#testing").load("projects/projects.html");
        $('body').css('overflow','scroll');
    });
});

