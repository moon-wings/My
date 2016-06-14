$(function(){
	$('.has-submenu').on('mouseenter mouseleave',function(){
		$(this).find('.submenu').toggleClass('active');
	});
	$('#fullpage').fullpage({
		slidesNavigation:true,
		navigation:true,
	});

	// if(!('#product-range').hasClass('focus')){
	// 	$(this).find('.pack').on('click',function(){
	// 		$(this).parent().parent().parent().parent().parent().addClass('focus')
	//     })
	// }
	






	
})