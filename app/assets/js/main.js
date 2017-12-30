// import Chart from 'chart.js';
var currentPage = "about";

$(document).foundation();

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
      if(currentPage != 'about'){
      console.log("in about");
        $("main").load("projects/about.php .maincontent",function(){
          // Parallax stuff
            // var scene = document.getElementById('scene');
            //   var parallax = new Parallax(scene);
            // console.log(parallax);
        });

        $('body').css('overflow','scroll');
        currentPage = 'about';
            }//end if
        // test();
    });

    $("a#btn-projects").click(function() {
      console.log("in projects");
      if(currentPage != 'projects'){
        $("main").load("projects/projects.php .maincontent");
        // $('body').css('overflow','scroll');

// var waitForEl = function(selector, callback) {
//   if (jQuery(selector).length) {
//     callback();
//   } else {
//     setTimeout(function() {
//       waitForEl(selector, callback);
//     }, 100);
//   }
// };
// console.log("mmm okay");
// waitForEl($('#myChart'), function() {
//   // work the magic
//   console.log("loading chart");
//   loadPieChart();
// });

        // $('#myChart').ready(function(){
        //   loadPieChart();
        // });
        currentPage = 'projects';
      }//end if
    });

    $("a#btn-contact").click(function() {
      console.log("in contact");
      if(currentPage != 'contact'){
        $("main").load("projects/contact.php .maincontent");
        console.log("here in about");
        recaptchaOnload();
        // validate();
        currentPage = 'contact';
      }//end if
    });

});
function loadPieChart(){
// $(document).ready(function(){
  $.getJSON("assets/json/projects.json", function(json) {
    var projects = json.projects;
    var sizeProjects = json.projects.length;
    var dictWithDiffTypes = {};
    for(var step = 0; step < sizeProjects; step++){
      console.log("LOADED THIS");
        var currentProject = projects[step];
        var key = 'techs';
        if (currentProject.hasOwnProperty(key)) {
          var arr =  currentProject[key];
          var arrayLength = arr.length;
          for (var i = 0; i < arrayLength; i++) {
            //check if its in dictionary already
            var currentTech = arr[i];
            if(dictWithDiffTypes.hasOwnProperty(currentTech)){
                dictWithDiffTypes[currentTech] = dictWithDiffTypes[currentTech]+1;
            }else{
              dictWithDiffTypes[currentTech] = 1;
            }//end else
          }//end for

        }//end if
    }//end for
    //now create the chart with the data
    var ctx = document.getElementById("myChart");
    ctx.style.backgroundColor = '#232323';
    var labelsNames = [];
    var labelsData = []
    for (var name in dictWithDiffTypes) {
      if (dictWithDiffTypes.hasOwnProperty(name)) {
        labelsNames.push(name);
        labelsData.push(dictWithDiffTypes[name]);
      }
    }

var dataSet = {
    datasets: [{
      label: '# of projects for tech',
        data: labelsData,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',

                'rgba(255, 200, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 100, 1)',
                'rgba(250, 192, 192, 1)',
                'rgba(153, 170, 255, 1)',
                'rgba(255, 159, 100, 1)',                
            ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: labelsNames
};

var optionsValues = {
        // This chart will not respond to mousemove, etc
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove", "touchend"],
        onClick: test
    };


    var myPieChart = new Chart(ctx,{
      type: 'pie',
      data: dataSet,
       options: {
       legend:{labels: {fontColor: 'white'}},
      title: {
            display: true,
            fontColor: 'white',
            text: 'Technologies used in projects (click to filter)'
        }}
    });//end pie chart 

     ctx.onclick = function(evt) {
            var activePoints = myPieChart.getElementsAtEvent(evt);
      if (activePoints[0]) {
        var chartData = activePoints[0]['_chart'].config.data;
        var idx = activePoints[0]['_index'];

        var label = chartData.labels[idx];
        var value = chartData.datasets[0].data[idx];
        updateProjects(label);
        console.log(label,value);
      }
     };//end onclick
  });
  } 
// });
function test(ele){
  // var activePoints = getElementsAtEvent(ele);
  console.log("clicked",ele);
}

function search(ele) {
    if(event.key === 'Enter') {
      var searchValue = ele.value;
      updateProjects(searchValue);
    }
}

function updateProjects(searchValue){
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

function containsWord(word, wordToCheck){
  return word.includes(wordToCheck);
}

//for resizing 
$(window).resize(function () {
    var viewportWidth = $(window).width();
    if($("#iconsmenu").hasClass("webicon")){
      console.log("it does have it");
    }else{
      console.log("herhehehreheh");
    }
    // if (viewportWidth < 768) {
    //         $(".view").removeClass("view view-portfolio").addClass("gallery-mobile");
    // }
});



//captcha
var _captchaTries = 0;
function recaptchaOnload() {

    _captchaTries++;
    if (_captchaTries > 9){
      console.log("returning");
      _captchaTries = 0
      return;
    }
    if ($('.g-recaptcha').length > 0) {
        grecaptcha.render("recaptcha", {
            sitekey: '6Lcaqj4UAAAAANibKDxwSTJ9WylQcaZB6OFPcEbb',
            callback: function() {
                console.log('recaptcha callback');
                _captchaTries = 0;
            }
        });
        return;
    }
    window.setTimeout(recaptchaOnload, 1000);
}


function hello(){
  alert('Hello world! in func hello');
}
$(function(){
  $('canvas[onload]').trigger('onload');
});
