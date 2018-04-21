$(document).ready(function() {

$('#services-images').backstretch(['img/design.jpg', 'img/pruning.jpg', 'img/gravel-walk.jpg', 'img/edging.jpg', 'img/sod-rolling.jpg', 'img/planting-tree.jpg', 'img/rake-mulch.jpg', 'img/laying-pavers.jpg'], {duration: 3000, fade: 750});

$(function(){
	$('#menu').slicknav();
});

$('.smoothscroll').smoothScroll({'offset':'170'});

$('.services .bold').hover(function() {
	$(this).css('cursor', 'pointer');
});

$('.services .bold').on('click', function() {
	$(this).siblings('.hidden-info').slideToggle('slow');
	});

var date = new Date();
var currentTime = date.getHours();
var open = null;
if (currentTime > 7 < 19)
	open = 'OPEN';
else open = 'CLOSED';

document.getElementById('time').innerHTML+= 'Hours: 8:00 am - 7:00 pm. We are now ' + open + '.';

});