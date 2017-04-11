jQuery(function($){
	isMenuShow = false ;
	$(".clsMenu").click(function(){
		if(!isMenuShow){
			$(".withBg").animate({width:'toggle'},350,'',function(){
					$(".clsMenu2").show();
					$(".lang-switcher").hide();
			});
			isMenuShow = true ;
		}else{
			isMenuShow = false;
			$(".clsMenu2").hide();

			$(".withBg").animate({width:'toggle'},350,'',function(){
				$(".lang-switcher").show();

			});
		}
	})

	if($('.grid').length){ //
		//check screen resolution
		if($(window).width() >= 768){ //XS
			$('.grid-item.visible-xs',$('.grid')).remove();//destroy element
		}
	}



	var posts = document.querySelectorAll('.grid, .recmd');
	imagesLoaded( posts, function() {
				$('.grid , .recmd').masonry({
				itemSelector: '.grid-item , .recmd-item',
				containerStyle: {position:'relative'},
		})
  });



			var fan=$(".fancybox").fancybox({
					openEffect	: 'none',
					closeEffect	: 'none'
			})
	$(".wp-posts-carousel-image img.owl-lazy").click(function(event){
			$(".fancybox:first",$(this).parent()).fancybox().trigger('click');
			event.stopPropagation();
	});

	$(".wp-posts-carousel-container span.guest-title").click(function(event){
			$(".fancybox:first",$(this).parents('.wp-posts-carousel-container')).fancybox().trigger('click');
			event.stopPropagation();
	});
	//Qucksand
	/*
	$('#source1').quicksand( $('#destination1 li') ,{
		name: value
	}, function(){
			console.log('working');
		}
	);
*/
	var $container = $('#destination').isotope({
		itemSelector: '.work-box',
	})
  $('#source').on( 'click', 'li', function() {

    var filterValue = $( this ).attr('data-filter');
	//	console.log(filterValue);
    // use filterFn if matches value
    //filterValue = filterFns[ filterValue ] || filterValue;
		//Above line does not needed
    $container.isotope({ filter: filterValue });
  });

	  var $li = $('.work-cat li').click(function() {
        $li.removeClass('active_cat');
        $(this).addClass('active_cat');
				$('.all').removeClass('active_cat');
    });

		$("#view_map , #view_act").fancybox({

      });


		$(".work-title").click(function(){
			var id=$(this).attr("data-target");
			window.location.hash = id;
		})

		var modid=window.location.hash;
		if(modid!=""){
     $(modid).modal('show');
		}

		$('.prod-box').each(function(i){
					$(".wpcf7-form .btn-size",$(this)).remove();
					//$(".wpcf7-form .pleft",$(this)).append("<div>Tallas</div>");
					$that = $(this) ;

		   //console.log($(".p_size",$that).length);
				if($(".p_size",$that).length!=0){
					$(".p_size",$that).each(function(i){
							$obj = $('<input>') // Create element on the fly
								.attr("name","size")
								.attr("type","radio")
								.attr("value",$(this).val())
							$div = $("<div>").append($obj).append(" " + $(this).val());
							$(".wpcf7-form .pleft",$that).append($div);
					})
				}else{
					$(".wpcf7-form .pleft",$that).hide();
				}

				if($(".p_color",$that).length!=0){
					$(".p_color",$that).each(function(i){
							$obj = $('<input>') // Create element on the fly
								.attr("name","color")
								.attr("type","radio")
								.attr("value",$(this).val())
							$div = $("<div>").append($obj).append(" " + $(this).val());
							$(".wpcf7-form .colors-div",$that).append($div);
					})
				}else{
					$(".wpcf7-form .colors-div",$that).hide();
				}

				if($(".p_others",$that).length!=0){
					$(".p_others",$that).each(function(i){
							$obj = $('<input>') // Create element on the fly
								.attr("name","others")
								.attr("type","radio")
								.attr("value",$(this).val())
							$div = $("<div>").append($obj).append(" " + $(this).val());
							$(".wpcf7-form .others-div",$that).append($div);
					})
				}else{
					$(".wpcf7-form .others-div",$that).hide();
				}
		})
		$( ".lbg img" ).css('cursor','pointer');
// 		$(".lang-item-en").click(function(){
// 			 $(".lbg img").addClass('mleft');
// 			 $( ".lbg img" ).animate({marginLeft: /*3*/0}, 80, function() {
// 				});
// 		})
// 		$(".lang-item-es").click(function(){
// 			 $( ".lbg img" ).animate({marginLeft: 0}, 80, function() {
// 				});
// 		})
		
		var sizeSwitch = 30;
		var switchHandle = $('.lbg img');
		var option1 =  $('.lang-item-es');
		var option2 =  $('.lang-item-en');
		var switchArea =  $('.lbg');

		switchHandle.draggable({
			axis: 'x',
			containment: 'parent',
			stop: function() {
				conditionMove();
			}
		});

		option1.click(function() {
			option1.addClass('active');
			option2.removeClass('active');
			switchHandle.animate({
				left: 0
			}, 100);
		});

		option2.click(function() {
			option2.addClass('active');
			option1.removeClass('active');
			switchHandle.animate({
				left: sizeSwitch + 'px'
			}, 100);
		});

		switchArea.click(function() {
			conditionMoveSnap();
		});


		function conditionMove() {
			if(parseInt(switchHandle.css('left')) <= (sizeSwitch / 2)) {
				switchHandle.animate({
					left: 0
				}, 100);
				option1.addClass('active');
				option2.removeClass('active');
				window.location = $(".lang-item-es > a").attr('href');
			}
			else {
				switchHandle.animate({
					left: sizeSwitch + 'px'
				}, 100);
				option2.addClass('active');
				option1.removeClass('active');
				window.location = $(".lang-item-en > a").attr('href');
			}
		}

		function conditionMoveSnap() {
			if(parseInt(switchHandle.css('left')) == sizeSwitch) {
				switchHandle.animate({
					left: 0
				}, 100);
				option1.addClass('active');
				option2.removeClass('active');
				window.location = $(".lang-item-es > a").attr('href');
			}
			else {
				switchHandle.animate({
					left: sizeSwitch + 'px'
				}, 100);
				option2.addClass('active');
				option1.removeClass('active');
				window.location = $(".lang-item-en > a").attr('href');
			}
		}
		
// 		$('.lbg > img').draggable({
// 				axis: 'x',
// 				containment: '.lbg',
// 				cursor: 'pointer',
// 				//grid: [30,0],
// 				stop: function(event,ui){
// 					if($(".lbg > img").css('left') > '15px'){
// 						window.location = $(".lang-item-en > a").attr('href');
// 					}else{
// 						window.location = $(".lang-item-es > a").attr('href');
// 					}
// 				}
// 			});

		
		$('.carousel').carousel({
    interval: false
		}); 
		
			$(window).scroll(function(){
				var window_top = $(window).scrollTop() ;
				
				if(window_top > 50){
					$(".footer_menu .menu-footer_menu-eng-container , .footer_menu .menu-footer_menu-esp-container").addClass('makeFix');
				}
			});
			
		$('#user_login').attr('placeholder', 'Username');
    $('#user_pass').attr('placeholder', 'Password');
});