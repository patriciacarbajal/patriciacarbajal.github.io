$(document).ready(function() {
  var myDataRef = new Firebase('https://theremouse.firebaseio.com/');
	var theremins = {};
	var userId = Math.floor(Math.random() * 1000000) + 1;

	var audioCtx = new(window.AudioContext || window.webkitAudioContext)();

	$(document).mousemove(function(event) {
		$(".x").text("X: " + event.pageX);
		$(".y").text("Y: " + event.pageY);

		myDataRef.push({xCoord: event.pageX, yCoord: event.pageY, userId: userId});
	});

	myDataRef.on('child_added', function(snapshot) {
    
	if (!theremins[userId]) {
		var theremin = new Theremin(audioCtx);
		theremins[userId.toString()] = theremin;
	} 
	var x = snapshot.val().xCoord;
	var y = snapshot.val().yCoord;
	theremins[userId].update(x, y);

 //  $('.line1').hover(function() {
 //      $('body').css('background-color', 'f8f087').fadeIn(3000);
 //  })
 //  $('.line2').hover(function() {
 //    $("body").fadeIn('slow').css('background-color', 'b7e3c0');
 //  })
 //  $('.line3').hover(function() {
 //    $("body").fadeIn('slow').css('background-color', 'ffc48c');
 //  })
 //  $('.line4').hover(function() {
 //    $("body").fadeIn('slow').css('background-color', 'dbbae5');
 //  })
 // $('.line5').hover(function() {
 //    $("body").fadeIn('slow').css('background-color', 'f39dd4');
 //  })
 //   $('.line6').hover(function() {
 //    $("body").fadeIn('slow').css('background-color', 'eecaf5');
 //  })
 //     $('.line7').hover(function() {
 //    $("body").fadeIn('slow').css('background-color', '95fefd');
 //  })

      
  $('body').mousemove(function(event) {
    var width = $('body').width(),
     height = $('body').height(),
     axisX = event.pageX,
     axisY = event.pageY;
 
    var hue = Math.floor(axisX / width * 360),
     saturation = Math.floor(axisY / height * 100),
     lightness = Math.floor(axisY / height * 100);
 
    $('body').css('background', 'hsl(' + hue + ',' + saturation + '%, ' + lightness + '%)');
  });

});

});

