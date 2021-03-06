$(document).ready(function() {

  // Initial variables
  var canvasSize = 500;
  var gridNumber = 16;
  var colour = "black";
  var eraserColour = $('#canvas').css("background-color");
  click = false;


  // Function that will make fresh grids
  function makeGrid(canvasSize, gridNumber) {

    // Calculating squares' size and quantity
  	var squareNumber = gridNumber * gridNumber;
  	var squareSize = (canvasSize / gridNumber);

    // Cleaning the canvas
    $('#canvas').empty();

    // Creating the grid
  	for (var i = 0; i < squareNumber; i++) {
  		$('#canvas').append("<div class='square'></div>")
  	};

    // Creating each square with adequate size
  	$('.square').css({
  	  height: squareSize,
  	  width: squareSize
    });

  };


  // Applying the colours on canvas
  $('#canvas').on('mousedown', function() {
    click = true;
  });

  $('#canvas').on('mouseup', function() {
    click = false;
  });

  $('div').on('mousedown', '.square', function() {
    $(this).css({
      'background-color': colour
    });
  });

  $('div').on('mousemove', '.square', function() {
    if(click === true){
      $(this).css({
        'background-color': colour
      });      
    };
  });




  // Clear button
  $('.clear').on('click', function(){
  	$('.square').css({
  		'background-color': '#F5F5F5'
  	})
  });

  // Change grid button
  $('.grid').on('click', function(){
  	gridNumber = prompt("Enter a new number for the grid size:");
    makeGrid(canvasSize, gridNumber)
  });


  // Changing colours
  $('.color1').on('click', function(){
  	colour = "#000000"
  });

  $('.color2').on('click', function(){
  	colour = "#98e6e6"
  });

  $('.color3').on('click', function(){
  	colour = "#ccff99"
  });

  $('.color4').on('click', function(){
  	colour = "#ffb3ff"
  });

  $('.color5').on('click', function(){
  	colour = "#bf80ff"
  });

  $('.eraser').on('click', function(){
    colour = eraserColour
  });



  // Making everything happen
  makeGrid(canvasSize, gridNumber);


});
