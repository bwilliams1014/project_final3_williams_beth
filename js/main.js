$(document).ready(function() {

$('#services-images').backstretch(['img/design.jpg', 'img/pruning.jpg', 'img/gravel-walk.jpg', 'img/edging.jpg', 'img/sod-rolling.jpg', 'img/planting-tree.jpg', 'img/rake-mulch.jpg', 'img/laying-pavers.jpg'], {duration: 3000, fade: 750});

$(function(){
	$('#menu').slicknav();
	});

$('.services .bold').on('click', function() {
	$(this).siblings('.hidden-info').slideToggle('slow');
	});

});