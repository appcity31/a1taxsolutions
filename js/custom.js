(function($) {
    "use strict";

    var tpj = jQuery;
    var revapi24;
	
	// Preloader 
	jQuery(window).on('load', function() {
		jQuery("#status").fadeOut();
		jQuery("#preloader").delay(350).fadeOut("slow");
	});
	
		//toggle-close
		$("#toggle-close").on("click", function () {
			var w = $('#sidebar').width();
			var pos = $('#sidebar').offset().left;
			if (pos == 0) {
				$("#sidebar").animate({
					"left": -w
				}, "slow");
			} else {
				$("#sidebar").animate({
					"left": "0"
				}, "slow");
			}
		});

		// ------------- index-two-toggle 

			
		//toggle-close
		$("#toggle-close2").on("click", function () {
			var w = $('#sidebar2').width();
			var pos = $('#sidebar2').offset().left;
			if (pos == 0) {
				$("#sidebar2").animate({
					"left": -w
				}, "slow");
			} else {
				$("#sidebar2").animate({
					"left": "0"
				}, "slow");
			}
		});

	// Menu button
	     /*--- Responsive Menu Start ----*/
		 $("#nav").on("click", function () {
			$(this).toggleClass("on");
            var w = $('#sidebar2').width();
            var pos = $('#sidebar2').offset().left;

            if (pos === 0) {
                $("#sidebar2").animate({ "left": -w }, "slow");
            }
            else {
                $("#sidebar2").animate({ "left": "0" }, "slow");
            }

        });


	// on ready function
    jQuery(document).ready(function($) {
		
		// ===== Scroll to Top ==== //
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 70) {
                $('#return-to-top').fadeIn(200);
            } else {
                $('#return-to-top').fadeOut(200);
            }
        });
        $('#return-to-top').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 300);
        });		
		 
		
		// Menu js for Position fixed
	$(window).scroll(function(){
		var window_top = $(window).scrollTop() + 1; 
		if (window_top > 300) {
			$('.main-header').addClass('menu_fixed animated fadeInDown');
		} else {
			$('.main-header').removeClass('menu_fixed animated fadeInDown');
		}
	});	

	// Menu-two js for Position fixed
	$(window).scroll(function(){
		var window_top = $(window).scrollTop() + 1; 
		if (window_top > 300) {
			$('.main-header-two').addClass('menu_fixed_two animated fadeInDown');
		} else {
			$('.main-header-two').removeClass('menu_fixed_two animated fadeInDown');
		}
	});	

	// Menu-three js for Position fixed
	$(window).scroll(function(){
		var window_top = $(window).scrollTop() + 1; 
		if (window_top > 300) {
			$('.three-header-wrapper').addClass('menu_fixed_three animated fadeInDown');
		} else {
			$('.three-header-wrapper').removeClass('menu_fixed_three animated fadeInDown');
		}
	});	






	// Menu button
	     /*--- Responsive Menu Start ----*/
		 $(".navbar-toggler").on("click", function () {
			$(this).toggleClass("on");
            var w = $('#sidebar').width();
            var pos = $('#sidebar').offset().left;

            if (pos === 0) {
                $("#sidebar").animate({ "left": -w }, "slow");
            }
            else {
                $("#sidebar").animate({ "left": "0" }, "slow");
            }

        });
		
		(function ($) {
            $(document).ready(function () {

                $('#cssmenu li.active').addClass('open').children('ul').show();
                $('#cssmenu li.has-sub>a').on('click', function () {
                    $(this).removeAttr('href');
                    var element = $(this).parent('li');
                    if (element.hasClass('open')) {
                        element.removeClass('open');
                        element.find('li').removeClass('open');
                        element.find('ul').slideUp(200);
                    }
                    else {
                        element.addClass('open');
                        element.children('ul').slideDown(200);
                        element.siblings('li').children('ul').slideUp(200);
                        element.siblings('li').removeClass('open');
                        element.siblings('li').find('li').removeClass('open');
                        element.siblings('li').find('ul').slideUp(200);
                    }
                });

            });
        })(jQuery);


		// $('li.has-sub').click(function() {
		// 	$(this).children('.sub-ul').slideToggle(500);
		// 	$(this).toggleClass('active');
		// 	 event.preventDefault();
		//   });


		//
		// ---------------Counter js
		var isAlreadyRun = false;

		$(window).scroll( function(){
		
			$('.counter-head').each( function(i){
		
				var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
				var bottom_of_window = $(window).scrollTop() + $(window).height();
		
		
					if( bottom_of_window > ( bottom_of_object + 20 )  ){
				if (!isAlreadyRun) {
				  $('.counter-count').each(function () {
						
						  $(this).prop('con counter-right-border', 0).animate({
							  Counter: $(this).text()
						  }, {
								  duration: 3500,
								  easing: 'swing',
								  step: function (now) {
									  $(this).text(Math.ceil(now));
								  }
							  });
						});
				}
						isAlreadyRun = true;
					}
			}); 
		
		});

		// counter-index-two 
		var isAlreadyRun = false;

		$(window).scroll( function(){
		
			$('.counter-head-two').each( function(i){
		
				var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
				var bottom_of_window = $(window).scrollTop() + $(window).height();
		
		
					if( bottom_of_window > ( bottom_of_object + 20 )  ){
				if (!isAlreadyRun) {
				  $('.counter-count').each(function () {
						
						  $(this).prop('con counter-right-border', 0).animate({
							  Counter: $(this).text()
						  }, {
								  duration: 3500,
								  easing: 'swing',
								  step: function (now) {
									  $(this).text(Math.ceil(now));
								  }
							  });
						});
				}
						isAlreadyRun = true;
					}
			}); 
		
		});

		
  // ===== Scroll to Top ==== //

  $(window).on('scroll', function () {
    if ($(this).scrollTop() >= 100) {
      $('#return-to-top').fadeIn(200);
    } else {
      $('#return-to-top').fadeOut(200);
    }
  });
  $('#return-to-top').on('click', function (e) {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
  });

  // -------- search-button ------- //

  $('#search-button').on("click", function (e) {
	$('#search-open').slideToggle();
	e.stopPropagation();
});
$(document).on("click", function (e) {
	if (!(e.target.closest('#search-open'))) {
		$("#search-open").slideUp();
	}
});





		// --------------- Expert-slider ---------------- //

		$('.expert-slider .owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:false,
			dots:false,
			autoplay: true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				1000:{
					items:5
				}
			}
		})


		// ------------- Expert-light-box ------------ //
		$('.expert-text').magnificPopup({
			delegate: '.img-link',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
			  enabled: true,
			  navigateByImgClick: true,
			  preload: [0, 1]
			},
			image: {
			  tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			  titleSrc: function (item) {
				return item.el.attr('title') + '<small></small>';
			  }
			}
		  });

		// --------------- Expert-two-slider ---------------- //

		$('.expert-slider-two .owl-carousel').owlCarousel({
			loop:true,
			margin:50,
			nav:false,
			dots:true,
			autoplay: true,
			responsive:{
				0:{
					items:1
				},
				700:{
					items:2
				},
				1000:{
					items:3
				}
			}
		});

				// --------------- Expert-two-single-slider ---------------- //

				$('.single-expert .owl-carousel').owlCarousel({
					loop:true,
					margin:50,
					nav:false,
					dots:false,
					// autoplay: true,
					responsive:{
						0:{
							items:1
						},
						600:{
							items:1
						},
						1000:{
							items:1
						}
					}
				});



	// -------------- testimonial-slider --------------- //
	$('.testimonial-slider .owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		dots:true,
		dotsData: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})

	// --------------- blog-slider ---------- //

	$('.blog-slider .owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
		dots: false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})

	// ----------------- banner-three-slider ------------//

	$('.banner-three .owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots: true,
		dotsData: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})



		
	
	// ------- Contact Form Submition ---------//
	function checkRequire(formId , targetResp){
		targetResp.html('');
		var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
		var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
		var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
		var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
		var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
		var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
		var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
		var check = 0;
		$('#er_msg').remove();
		var target = (typeof formId == 'object')? $(formId):$('#'+formId);
		target.find('input , textarea , select').each(function(){
			if($(this).hasClass('require')){
				if($(this).val().trim() == ''){
					check = 1;
					$(this).focus();
					targetResp.html('You missed out some fields.');
					$(this).addClass('error');
					return false;
				}else{
					$(this).removeClass('error');
				}
			}
			if($(this).val().trim() != ''){
				var valid = $(this).attr('data-valid');
				if(typeof valid != 'undefined'){
					if(!eval(valid).test($(this).val().trim())){
						$(this).addClass('error');
						$(this).focus();
						check = 1;
						targetResp.html($(this).attr('data-error'));
						return false;
					}else{
						$(this).removeClass('error');
					}
				}
			}
		});
		return check;
	}
	$(".submitForm").on("click", function() {
		var _this = $(this);
		var targetForm = _this.closest('form');
		var errroTarget = targetForm.find('.response');
		var check = checkRequire(targetForm , errroTarget);
		if(check == 0){
			var formDetail = new FormData(targetForm[0]);
			formDetail.append('form_type' , _this.attr('form-type'));
			$.ajax({
				method : 'post',
				url : 'ajax.php',
				data:formDetail,
				cache:false,
				contentType: false,
				processData: false
			}).done(function(resp){
				if(resp == 1){
					targetForm.find('input').val('');
					targetForm.find('textarea').val('');
					errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
				}else{
					errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
				}
			});
		}
	});
	
	
	//Single page scroll js
	$('.os_navigation_wrapper ul li a').on('click' , function(e){
	  $('.os_navigation_wrapper ul li').removeClass('active');
	  $(this).parent().addClass('active');
	  var target = $('[data-scroll='+$(this).attr('href')+']');
	  e.preventDefault();
	  var targetHeight = target.offset().top-parseInt('80', 10);
	  $('html, body').animate({
	   scrollTop: targetHeight
	  }, 1000);
	});
	
	$(window).scroll(function() {
	  var windscroll = $(window).scrollTop();
	  var target = $('.os_navigation_wrapper ul li');
	  if (windscroll >= 0) {
	   $('[data-scroll]').each(function(i) {
		if ($(this).position().top <= windscroll + 90) {
		 target.removeClass('active');
		 target.eq(i).addClass('active');
		}
	   });
	  }else{
	   target.removeClass('active');
	   $('.os_navigation_wrapper ul li:first').addClass('active');
	  }

	});
	
	
	
	// scrolling animation js
	
	 var $winW = function() {
        return $(window).width();
    };
    var $winH = function() {
        return $(window).height();
    };
    var $screensize = function(element) {
        $(element).width($winW()).height($winH());
    };
    var screencheck = function(mediasize) {
        if (typeof window.matchMedia !== "undefined") {
            var screensize = window.matchMedia("(max-width:" + mediasize + "px)");
            if (screensize.matches) {
                return true;
            } else {
                return false;
            }
        } else {
            if ($winW() <= mediasize) {
                return true;
            } else {
                return false;
            }
        }
    };
            $('.animated-row').each(function() {
                var $this = $(this);
                $this.find('.animate').each(function(i) {
                    var $item = $(this);
                    var animation = $item.data('animate');
                    $item.on('inview', function(event, isInView) {
                        if (isInView) {
                            setTimeout(function() {
                                $item.addClass('animated ' + animation).removeClass('animate');
                            }, i * 50);
                        } else if (!screencheck(767)) {
                            $item.removeClass('animated ' + animation).addClass('animate');
                        }
                    });
                });
            });
	
	
	
	
/*** CHECKOUT PAGE FORM TOGGLE ICON ***/
$(".form-toggle.accordion_toggle a").click(function(){
	$(this).toggleClass("pointed");
});	



	})

})(jQuery);	