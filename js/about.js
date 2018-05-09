setTimeout(function(){
	$('.animate1').slideDown(2000)
},1500)
setTimeout(function(){
	$('.animate2').slideDown(2000)
},2000)
setTimeout(function(){
	$('.animate3').slideDown(2000)
},2500)
$(document).on('click', '.bottom-text', function(){
  $.fn.fullpage.moveSectionDown();
});
$(document).on('click', '.top-text', function(){
  $.fn.fullpage.moveSectionUp();
});
