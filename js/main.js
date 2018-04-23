$(document).ready(function() {

// initiate smoothscroll plugin
$('.smoothscroll').smoothScroll({'offset':'20'});

// initiate slicknav plugin
$(function(){
	$('#menu').slicknav();
});

// add images to services element with backstretch plugin
$('#services-images').backstretch(['img/design.jpg', 'img/pruning.jpg', 'img/gravel-walk.jpg', 'img/edging.jpg', 'img/sod-rolling.jpg', 'img/planting-tree.jpg', 'img/rake-mulch.jpg', 'img/rock-pond.jpg', 'img/laying-pavers.jpg'], {duration: 3000, fade: 750});

// change cursor when hovering over text in services section
$('.services .bold').hover(function() {
	$(this).css('cursor', 'pointer');
	});

// show hidden information when text is clicked on
$('.services .bold').on('click', function() {
	$(this).siblings('.hidden-info').slideToggle('slow');
	});

// determine if store is open or closed; add content to HTML
var date = new Date();
var currentTime = date.getHours();
var open = null;
if (currentTime >= 7 && currentTime < 19)
	open = 'OPEN';
	else open = 'CLOSED';
document.getElementById('time').innerHTML+= 'Hours: 8:00 am - 7:00 pm.  We are now ' + open + '.';

});