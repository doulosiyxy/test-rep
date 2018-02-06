var pathname = window.location.href;
//presets
$('.title-wrapper').delay(3000).fadeOut(1000);
$('.jumbotron').delay(4000).fadeOut(1000);
$('#home-nav').delay(5000).animate({"margin-top": "10px"}, 500);
$('#home-footer').delay(5000).animate({"margin-bottom": "0px"}, 500);
$('.one').delay(5500).fadeTo(1500, 0.7);
$('.two').delay(5700).fadeTo(1500, 0.7);
$('.three').delay(5900).fadeTo(1500, 0.7);
$('.four').delay(6100).fadeTo(1500, 0.7);
$('#logo-icon').animate({height: 220}, 200);
$('#contact-text').css('padding-bottom','2000px');

$('.project-figure').on('mouseover', function() {
  $(this).css("opacity", 1).on('mouseleave', function() {
    $(this).css("opacity", 0.7);
  });
});

//hyperlinks
$('.linkedin').on('click', function() {
  window.open('https://linkedin.com/in/jamesrcrooke', '_blank');
});
$('.github').on('click', function() {
  window.open('https://github.com/doulosiyxy', '_blank');
});
$('.titles').on('click', () => {
  window.location.href='index.html';
  });
$('.one').on('click', function() {
  window.open('http://projecttimothyuganda.github.io/ptu', '_blank');
});
$('.two').on('click', function() {
  window.open('http://theexegesist.co.uk', '_blank');
});
$('.three').on('click', function() {
  window.open('http://ornis.co.uk', '_blank');
});
$('.four').on('click', function() {
  window.open('http://www.wycliffechurch.org.uk', '_blank');
}); 
$('.projects-link').on('click', function() {
  window.location.href="index.html"
}); 
  
$('#contact-nav').delay(200).animate({"opacity": 1}, 400);
$('#about-nav').delay(1500).animate({"opacity": 1}, 400);
$('#contact-footer').delay(200).animate({"opacity":1}, 400);
$('#about-footer').delay(1500).animate({"opacity":1}, 400);

$('#about-img-wrap').fadeTo(1000, 1);
$('#skill-btn').delay(1500).animate({"left": "-35px"}, 400);

var number = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen'];
var i = 0;

function titleLoop() {
  setTimeout(function () { 
	//var word = document.getElementById(number[i]);
	$('#about-title span').eq(i).fadeTo(2500, 1);
	i++;
	var stop = number.length;
	if ( i < stop) {
	  titleLoop();
	}
  }, 20)
}

setInterval(titleLoop(), 800);

//var numberTwo = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen'];
var x = 0;

function titleFade() { 
  setTimeout(function () {
  $('#about-title span').eq(x).fadeTo(500, 0);
  $('.skl').delay(350).eq(x).fadeTo(1900, 1);
  x++;
  //var stop = 14;
  if ( x < 14) {
	titleFade();
	}
  }, 1) 
}

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { 

  $('#contact-text').css('padding-bottom','2000px');

  if ($(window).height() > 768 ) {
  $('#about-title-wrap').css({"top": "30%"});
    $('#skill-btn').on('click', function() {
      $('#about-title-wrap').delay(840).animate({"top": "25%"}, 2300);
    });
  } else if ($(window).width() < 768 & $(window).width() >= 667) { 
  $('#about-title-wrap').css({"top": "10%"});
  $('.skl h3').css("font-size",  12); 
    $('#skill-btn').on('click', function() {
      $('.skl').css({"width" : "65px", "height" : "65px"});
      $('#about-title-wrap').delay(840).animate({"top": "10%"}, 2000); 
    });
  } else if ($(window).width() < 667) { 
  $('#about-nav div nav').removeClass('col-sm-12');
  $('#about-title-wrap').css({"top": "10%"});
  $('.skl h3').css("font-size",  12); 
  $('#about-title').css("font-size",  25); 
    $('#skill-btn').on('click', function() {
      $('.skl').css({"width" : "65px", "height" : "65px"});
      $('#about-title-wrap').delay(840).animate({"top": "1%"}, 2000); 
    });
  } else {
    $('#skill-btn').on('click', function() {
      $('#about-title-wrap').delay(840).animate({"top": "13%"}, 2300);
    });
  }
  
  if ($(window).width() < 737) {
    $('header span a').eq(0).html('<i class="glyphicon glyphicon-home"></i>');
    $('header span a').eq(1).html('<i class="glyphicon glyphicon-user"></i>');
    $('header span a').eq(2).html('<i class="glyphicon glyphicon-th-large"></i>');
    $('header span a').eq(3).html('<i class="glyphicon glyphicon-envelope"></i>');
    $('.project-figure').css('max-width', '');
    $('.project-figure img').css('width', '30%');
    $('.projects p').css('font-size', '10px');
    $('.projects h2').css('font-size', '20px');
    $('#about-title').css('font-size', '15px');
    $('#about-title-wrap').css("top", "35%");
    $('#h-nav').css('top', '-20px');
    $('#c-nav').css('margin-top', '10px');
    $('#contact-text').css('padding','70px 0 600px 0');
    $('#logo-icon').css({'width' : '120px', 'height' : '120px', 'margin-top' : '-30px', 'margin-left' : '20px'});
    $('#about-nav nav').css({'padding-right' : '0px'});
    $('#about-nav nav').css({'right' : '-20px'});
  } 
  
  if ($(window).width() < 567) {
      $('#contact-text').css('padding','150px 20px 400px 20px');
      $('#contact-top').css('height', '100px');
      $('#about-footer div').css({'margin' : '', 'float' : 'right'});
      $('#about-footer div img').eq(2).css({'margin-right' : '5px'});
      $('#about-footer div img').css({'background-color' : 'black', 'border-radius' : '2px'});
      $('#c-nav').css('margin-top', '40px');
      $('#skill-btn').css('top', '45%');
      $('#skill-btn').on('click', function() { 
        $('.skl').css({"width" : "100%", "height" : ""});
        $('#about-title-wrap').delay(840).animate({"top": "1%"}, 2000).css('height','100%').css('overflow','scroll');
        $('.skl-wrapper').css('max-width','100%');
      });  
   } 
   
   if ($(window).width() < 347) {
     $('#h-nav').css('padding-top', '25px');
     $('#c-nav').css({'margin-top' : '50px', 'margin-right' : '0px'});
     $('#contact-nav nav').css({'padding-right' : '0px'});
     $('#c-nav a').css({'padding-right' : '0px', 'padding-left' : '15px'});
   }
   
} else if ($(window).height() > 767 ) {
  $('#skill-btn').on('click', function() {
    $('#about-title-wrap').delay(840).animate({"top": "17%"}, 2300);
  });
} else {
  $('#skill-btn').on('click', function() {
    $('#about-title-wrap').delay(840).animate({"top": "9%"}, 2300);
  });
}
//mobile settings
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {	

  
  $('#main-nav').css('margin-left', 'auto');
  if($(window).width() < 321) {
    $('#logo-icon').css('font-size', '25px');
  }
  $(window).on('scroll', function() {
    var currPos = $(document).scrollTop();
      if(currPos < 300) {
  	    $("#about-jumbotron").css('margin-bottom', 130 - (currPos/2) );
  	  }
  });	
}
// Digital Clock
$(document).ready(function() {
  //copyright year
  function displayYear() {
    var currentTime = new Date();
   	var year = currentTime.getYear();
    var copyrightYear = document.getElementById('copyright');
   	copyrightYear.innerText = "© " + (year + 1900) + " James Crooke.";
  }
  $(document).ready(function() {
	displayYear();
  });
  function displayTime() {
    var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   	var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];    
   	var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
   	var seconds = currentTime.getSeconds();
   	var changeColor = seconds % 2;
   	var day = currentTime.getDay();
   	var date = currentTime.getDate();
   	var month = currentTime.getMonth();
   	var year = currentTime.getYear();
   	//below two vars grab array strings to supply elements at bottom.
    var selectDay = weekDay[day];
    var selectMonth = monthName[month];
   	//this code turns the clock into a 12 hour with AM/PM
   	var meridiem = "AM";
   	if (hours > 12) {
      hours = hours - 12;
      meridiem = "PM";
    }
    // 0 AM and 0 PM should read as 12
    if (hours === 0) {
      hours = 12;    
    } 
    if (changeColor === 0) {
      $('#all').removeClass('even').addClass('odd');
    } else if (changeColor === 1) {
      $('#all').removeClass('odd').addClass('even');
    }    
    // Below adds 0s to seconds, minutes, hours
   	if (seconds < 10) {	
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
   	var clockDiv = document.getElementById('clock');
   	var dayDiv = document.getElementById('day');
   	var dateDiv = document.getElementById('date');
   	clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    dayDiv.innerText = selectDay;
    dateDiv.innerText = selectMonth + " " + date + " " + (year + 1900); 
  }
  setInterval(displayTime, 1000);
});
// gradient timing
var colors = new Array(

  [194,194,194],
  [0,0,0,],
  [255,255,255],
  [47,144,235],
  [105,95,95],
  [245,245,245]);
  
var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];
//transition speed
var gradientSpeed = 0.002;

function updateGradient() {
  if ( $===undefined ) return;
  
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];
  
  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";

  $('.gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 ) {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
  
  }
}
setInterval(updateGradient,15);
//menu bars
function changeMenu(x) {
    x.classList.toggle("change");
}
$('.menu-container').on('click', () => {
	$('#hidden-nav').slideToggle();	
});
//instrument
var cNote = document.getElementById('cAudio');
$('#c').mousedown(function(){
  cNote.currentTime = 0;
  cNote.play();
});
var dNote = document.getElementById('dAudio');
$('#d').mousedown(function(){
  dNote.currentTime = 0;
  dNote.play();
});
var eNote = document.getElementById('eAudio');
$('#e').mousedown(function(){
  eNote.currentTime = 0;
  eNote.play();
});
var fNote = document.getElementById('fAudio');
$('#f').mousedown(function(){
  fNote.currentTime = 0;
  fNote.play();
});
var gNote = document.getElementById('gAudio');
$('#g').mousedown(function(){
  gNote.currentTime = 0;
  gNote.play();
});
var aNote = document.getElementById('aAudio');
$('#a').mousedown(function(){
  aNote.currentTime = 0;
  aNote.play();
});
var bNote = document.getElementById('bAudio');
$('#b').mousedown(function(){
  bNote.currentTime = 0;
  bNote.play();
});
// sun moon
$(document).ready(function() {
  $('#orb').click( function() {        
    if ($('#orb').hasClass('sun')) {
          $('#orb').removeClass('sun').addClass('moon');
    }
    else {
      $('#orb').removeClass('moon').addClass('sun');
    }
    if ($('#sky').hasClass('day')) {
      $('#sky').removeClass('day').addClass('night');
    } else {
        $('#sky').removeClass('night').addClass('day');
    }
    if ($('#moonspot1').hasClass('visible')) {
      $('#moonspot1').removeClass('visible');
    } else {
        $('#moonspot1').addClass('visible');
    }
    if ($('#moonspot2').hasClass('visible')) {
      $('#moonspot2').removeClass('visible');
    } else {
        $('#moonspot2').addClass('visible');
    }
    if ($('#moonspot3').hasClass('visible')) {
      $('#moonspot3').removeClass('visible');
    } else {
      $('#moonspot3').addClass('visible');
    }
  });
 //
  $('#about-banner-one').on('click', () => {
    $('#timeline-div').slideToggle();
    $('.skill-wrap').slideUp();
  });
	
  $('#about-banner-two').on('click', () => {
    $('#timeline-div').slideUp();
    $('#skills-wrap-one').slideToggle();
    $('#skills-wrap-two').slideUp();
  });
	
  $('#about-banner-three').on('click', () => {
    $('#timeline-div').slideUp();
    $('#skills-wrap-one').slideUp();
    $('#skills-wrap-two').slideToggle();
  });
	// hyperlink
  $('.logo').on('click', () => {
    window.location.href='index.html';
  });
});
// scroll fade out function
$(function() {
  var documentEl = $(document), 
	  fadeElem = $('.fade-scroll');
  documentEl.on('scroll', function() {
    var currScrollPos = documentEl.scrollTop();
    fadeElem.each(function() {
	  var $this = $(this),
	  elemOffsetTop = $this.offset().top;
	  if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/400);					
	});	
  });
});
// scroll animations move and fade in
$(window).on('scroll', function() {
  var currPos = $(document).scrollTop();

  if(currPos < 120) {
    $('.animate').css('margin-top', 100 - currPos);
  }
			
});
  
$(function() {
  var documentEl = $(document), 
  fadeElemA = $('.animate');
  documentEl.on('scroll', function() {
    var currScrollPos = documentEl.scrollTop();
	fadeElemA.each(function() {
	  var $this = $(this),
	  elemOffsetTop = $this.offset().top;
	if (currScrollPos < elemOffsetTop ) $this.css('opacity', 0 + ((currScrollPos + 10)/(elemOffsetTop - 150)));				
	});	
  });
});
//error handlers resets top elements opacity to 1.
$(window).on('scroll', function() {
  var docTop = $(document).scrollTop();
  if (docTop === 0) {	
    $(".jumbotron").css('opacity', 1);
	$(".clock").css('opacity', 1);
  }
});

$('#myBtn').on('click', function() {
  $(".jumbotron").css('opacity', 1);
  $(".clock").css('opacity', 1);
});