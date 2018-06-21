$(document).ready(function() {
  $(".card").hover(function(){
     // if mouse hover then add .flipping class
    $(this).addClass("flipping");

},function(){
    // if mouse unhover then remove the .flipping class
    $(this).removeClass("flipping");
});

});


/*
- document ready ensures that the all html elements have been loaded
-  then target .card div
- .hover means .card only targeted when pointer over company logos
- this ensures only active div is targeted
- .addclass, adds flipping class to html doc
- .removeclass removes .flipping when pointer moves outside of div
*/
