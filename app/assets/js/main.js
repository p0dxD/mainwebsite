// import Chart from 'chart.js';

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
      console.log("in about");
        $("main").load("projects/about.html .maincontent");
        $('body').css('overflow','scroll');
        // test();
    });

    $("a#btn-projects").click(function() {
      console.log("in projects");
        $("main").load("projects/projects.html .maincontent");
        $('body').css('overflow','scroll');
        $('#myChart').ready(function(){
          loadPieChart();
        });
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
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',

                'rgba(255, 200, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 100, 0.2)',
                'rgba(250, 192, 192, 0.2)',
                'rgba(153, 170, 255, 0.2)',
                'rgba(255, 159, 100, 0.2)',                
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
      // options: optionsValues
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

