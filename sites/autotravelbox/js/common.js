$(document).ready(function() {

	//Вызов плагина fullPage
	$("#fullpage").fullpage({			
		paddingTop: '20px',
		paddingBottom: '58px',
		scrollBar:false,
		scrollOverflow:true,
		navigation:true,
		navigationTooltips:['Титульная','Описание','Использование','Новости','Контакты'],		
		navigationPosition:'left',		
		loopBottom:true,
		loopHorizontal:false
	});

	$("#fp-nav").prepend('<div class=icon-up></div>');
	$("#fp-nav").prepend('<div class=icon-down></div>');


	$("#fp-nav .icon-up").click(function(){
		$.fn.fullpage.moveSectionUp();
	});
	$("#fp-nav .icon-down").click(function(){
		$.fn.fullpage.moveSectionDown();
	});

	//popUp
	$(".popup").magnificPopup();
	$(".close").click(function(){
		$.magnificPopup.close();
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$.magnificPopup.close();
			$(".link-up").click();			
		});
		return false;
	});	
	
	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl3 = $(".carousel-screen3");
	owl3.owlCarousel({
		singleItem : true,
		paginationNumbers : true
	});
	owl3.on("mousewheel", ".owl-wrapper", function (e) {		
		if (e.deltaY > 0) {
			owl3.trigger("owl.prev");
		} else {
			owl3.trigger("owl.next");
		}		
		return false;
	});	

	var owl4 = $(".carousel-screen4");
	owl4.owlCarousel({
		singleItem : true,
		afterInit : function(elem){
	      var that = this
	      that.owlControls.prependTo(elem)
    	}		
	});
	
		
	//переключение видимости меню при нажатии на кнопку
	$("#button-menu").click(function(){
		$(".site-navigation ul").slideToggle();
	});
	
	//блок новостей
	var bdateH = $(".section3 .block-date.active").outerHeight(true);
	var bdescH = $(".section3 .block-date.active .descr").outerHeight(true);
	$(".section3 .block-date.active").css('min-height', 350+bdescH);

	$(".section3 .block-date").click(function(){
		$(".section3 .block-date").removeClass("active");
		$(this).addClass("active");		
		bdateH = $(".section3 .block-date.active").outerHeight(true);
		bdescH = $(".section3 .block-date.active .descr").outerHeight(true);
		$(".section3 .block-date").css('min-height', 100);		
		$(".section3 .block-date.active").css('min-height', 350+bdescH);
	});

	

	//добавление интерактивной карты
	function initialize() {  
		var centerLatlng = new google.maps.LatLng(49.859045, 17.396374);
		var mapOptions = {
			zoom: 6,
			center: centerLatlng,
			scrollwheel: false			
		};
		var map = new google.maps.Map(document.getElementById("google-map"), mapOptions);
		
		var image = 'image/img-map-marker.png';
		var myLatlng = new google.maps.LatLng(49.859045, 17.396374);
		var marker = new google.maps.Marker({
				position: myLatlng,
				map: map,      
				icon: image
		});		
	};

	google.maps.event.addDomListener(window, "load", initialize);

});