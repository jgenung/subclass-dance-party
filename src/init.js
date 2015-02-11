$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    dancers.push(dancer.$node);
    $('body').append(dancer.$node);
  });


  $('.lineUp').on('click', function(event){
    for (var i = 0; i < dancers.length; i++){
      dancers[i].animate({left:0}, 'slow');
    }
  });

  $('.interact').on('click', function(event){
    for(var i = 0; i < dancers.length; i++){
      if(i % 2 === 0){
        var temp = dancers[i].offset().top;
        var tempLeft = dancers[i].offset().left;
        dancers[i].css({top: dancers[i+1].offset().top, left: dancers[i+1].offset().left}, 'slow');
        dancers[i+1].css({top: temp, left: tempLeft}, 'slow');
      }
    }
  });

  $('body').on('mouseover', '.dancer', function(){
     $(this).css({borderColor: "blue"}).mouseleave(function(){
         $(this).css({borderColor: "green"});
     });
  });

});