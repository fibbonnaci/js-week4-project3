/*
=======================================================

 ** Week 4 - Project 3 **
***   jQuery Mania II  ***



=======================================================
*/


$(document).ready(function() {



// Question #1
$(".changeColor").click(function(){
  $("li:nth-child(3)").addClass("third-ele");
});


// Question #2
$("li:nth-child(4)").click(function(){
  $(this).append("<li>Another new li </li>");
});


// Question #3
$("#removeLi").click(function(){
  $("li:nth-child(2)").remove();
});


// Question #4
$("li:nth-child(5)").click(function(){
  $("li").hide();
  $("li:nth-child(5)").show();
  $("li:nth-child(5)").addClass("newFont");
});


// Question #5
$(".cute").click(function(){
  $(".clones").append($(this).clone(true));


});

  // Question #6
// $("body").dblclick(function(){
//   $("#makeSquare").removeClass();
//   $("#makeSquare").addClass("square");
// });
$("body").dblclick(function() {
       $("#makeSquare").css("width", "120px");

   });


// Question #7
$(".black.swatch").click(function(){
  $("body").addClass("black");
});
$(".wood.swatch").click(function(){
  $("body").addClass("wood");
});
$(".chaos.swatch").click(function(){
  $("body").addClass("chaos");
});
$(".restore.swatch").click(function(){
  $("body").removeClass();
});


  // Question #8
  $("#hover").hover(function(){
    ("#hover").css("background","#ff0000");
  });
  $("#hover").click(function(){
    $(this).toggleClass("green");
    // $("#hover").click(function(){
    // $(this).removeClass();
  // }); # this worked only once. the next click it did not work 
  });

// how to add #element styles to jquery?



});
