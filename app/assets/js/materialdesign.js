$(document).ready(function(){
     $('.carousel').carousel();
});

$('.carousel.carousel-slider').carousel({fullWidth: true});

//sidebar

// Initialize collapse button
 $(".button-collapse").sideNav();
 // Initialize collapsible (uncomment the line below if you use the dropdown variation)
 //$('.collapsible').collapsible();

 $('.button-collapse').sideNav({
     menuWidth: 300, // Default is 300
     edge: 'right', // Choose the horizontal origin
     closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
     draggable: true // Choose whether you can drag to open on touch screens
   }
 );

$('.button-collapse').sideNav('show');


$('.collapsible').collapsible({
  accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  onOpen: function(el) { alert('Open'); }, // Callback for Collapsible open
  onClose: function(el) { alert('Closed'); } // Callback for Collapsible close
});

$('.dropify').dropify();
