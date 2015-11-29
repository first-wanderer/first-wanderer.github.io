$(document).ready(function() {
	
	//маска для телефона
    $(".mask").mask("9 (999) 999-99-99");

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		singleItem: true
	});	
	$(".next-button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev-button").click(function(){
		owl.trigger("owl.prev");
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

	$("#form-order").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(".link-up").click();			
		});
		return false;
	});

	$("#form-test").submit(function() {
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

	$("#form-create").submit(function() {
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

	$("#form-escort").submit(function() {
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

	//изменяющаяся надпись
	function blink() {
		$('.change-1').fadeOut(1500,function() {
			$('.change-2').fadeIn(1500,function() {
				$('.change-2').fadeOut(1500,function() {
					$('.change-3').fadeIn(1500,function() {
						$('.change-3').fadeOut(1500,function() {
							$('.change-4').fadeIn(1500,function() {
								$('.change-4').fadeOut(1500,function() {
									$('.change-1').fadeIn(1500,function() {
										blink();
									});
								});
							});
						});
					});
				});
			});
		});
	};
	
	blink();

});