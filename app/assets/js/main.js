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

function search(ele) {
    if(event.key === 'Enter') {
      var searchValue = ele.value;
    $.getJSON("assets/json/projects.json", function(json) {
      var projects = json.projects;
      var sizeProjects = json.projects.length;
       var test = "";
      // var listOfItems = [];
      for(var step = 0; step < sizeProjects; step++){
        var currentProject = projects[step];
        for (var key in currentProject) {
        // check if the property/key is defined in the object itself, not in parent
        if (currentProject.hasOwnProperty(key)) {           
             if(containsWord(currentProject[key],searchValue)){
              //display the elements that were searched 
              //for if it contains keyword somewhere


      var tmp = `<div class="cell">
      <div class="card">
        <div class="card-image">
          <img src=../assets/images/gifs/`+String(currentProject.src)+`>
        </div>
        <div class="card-section">
          <h4>`+String(currentProject.title)+`</h4>
          <p>It has an easy to override visual style, and is appropriately subdued.</p>
        </div>
      </div>
    </div>`

            test += tmp;
              console.log(test);
              // listOfItems.push(currentProject);
              break;
            }//end if
          }//end if
        }//end for

      }//end for
      console.log(test);
      $( "div.projects").html(test);
      // console.log(listOfItems);
    });      
    }
}

function containsWord(word, wordToCheck){
  return word.includes(wordToCheck);
}