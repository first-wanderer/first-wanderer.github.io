$(document).ready(function() {
	
	//переключение видимости меню при нажатии на кнопку
	$("#button-menu").click(function(){
		$(".wrap-down ul").slideToggle();
	});

	//popUp
	$(".expand").magnificPopup();
		
	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 2,
	    itemsCustom : [[0,1], [991,2]]	    
	});	
	$(".next-button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev-button").click(function(){
		owl.trigger("owl.prev");
	});
	

});