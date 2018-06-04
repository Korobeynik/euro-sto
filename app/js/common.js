$(function() {

		$('.curs').hide();

		$(".catalog-btn").attr("href","http://euro-sto.com.ua/katalog.pdf");
		$(".catalog-btn").attr("target","_blank");

		$('a.gallery-wrap.btn-gallery-wrap.catalog-btn').attr("href", "/img/big1.jpg")


		function changeCourse(course)
		  {
		  $('.choise-form .dol').each(function( index ) {
		     var price = parseInt($(this).text().replace(/\s{1,}/g, '').substring(1));
		if(!isNaN(price)){
		var result = price * course;
		$(this).prev().text(result+ " " + 'грн');
		}
		  });
		  }

		  //МЕНЯЕМ КУРС ДОЛАРА ТУТ!
			changeCourse(29);



	$(".choise-filter").append("<div class='open'></div>");

	$(".open").on('click', function() {
		$(this).closest('.choise-filter').toggleClass('active');
		$('.choise-content').toggleClass('black');
	});

	//Slideshow product page

	$('.slideshow__pic').on('click', function(e) {
			e.preventDefault();

			var
				$this = $(this),
				item = $this.closest('.slideshow__item'),
				container = $this.closest('.slideshow'),
				display = container.find('.slideshow__display'),
				imgIn = item.find('img').attr('src'),
				duration = 100;

			if (!item.hasClass('active')) {
				item.addClass('active').siblings().removeClass('active');

				display.find('img').fadeOut(duration, function() {
						$(this).attr('src', imgIn).fadeIn(duration);
				});
			}


	});

	//$('#ex').zoom();

	$(".promo-btn").addClass("popup").attr('href', '#form-base');

	$(".product .logo").attr('href', '/index.html');

	//Curs dolara

	

	$('.hidden-js').css('opacity','0');

	// $('.choise-item').equalHeights();

	function resizeWidth() {
    // $('.section-3').height($(window).width()*1056/1597);
    var defaultWidth = 1600,
    defaultFont = 10;
    if ($(window).width() >= 1600) {
        $('html').css('font-size', '10px');

    } else if (($(window).width() >= 768) && ($(window).width() < 1600)) {

        $('html').css('font-size', $('html').width() / defaultWidth * defaultFont + 'px');
    } else {
         $('html').css('font-size', $('html').width() / defaultWidth *2.5* defaultFont + 'px');

    }
	}; // end reize

	function resizeWidthMobile() {
		if ($(window).width() < 600) {
			$("body br").remove();
		}
	};

	resizeWidth();
	resizeWidthMobile();

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(".phone").mask("+38(999)-999-9999");

	$('.popup').magnificPopup();

	// $(".fixed-menu a").mPageScroll2id();
 	$(".gallery-wrap").mPageScroll2id();

	//OWL Carousel
	// $('.owl-carousel').owlCarousel({
 //        items:1,
 //        loop: true,
 //        //center:true,
 //        nav: true,
 //        navText: "",
 //        margin:10,
 //        mouseDrag: false,
 //        touchDrag: false,
 //        URLhashListener:true,
 //        autoplayHoverPause:true,
 //        startPosition: 'URLHash'
 //    });

 $(".gallery-wrap").click( function() {
 	$("html").css("overflow-x","hidden");
 })

	//Galerry
	$(".mp-gallery").each(function() {
		$(this).magnificPopup({
			delegate: 'a',
			mainClass: 'mfp-zoom-in',
			type: 'image',
			tLoading: '',
			gallery:{
				enabled: true,
			},
			removalDelay: 300,
			callbacks: {
				beforeChange: function() {
					this.items[0].src = this.items[0].src + '?=' + Math.random();
				},
				open: function() {
					$.magnificPopup.instance.next = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
					}
					$.magnificPopup.instance.prev = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
					}
					$("html").css("overflow-x","hidden");
				},
				imageLoadComplete: function() {
					var self = this;
					setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
				}
			}
		});
	}); // end gallery

	//TIMER

	var time = new Date();
	var target_time = new Date(time.getFullYear(), time.getMonth(), time.getDate());

	var note = $('#note'),
		note2 = $('#note2'),
		note3 = $('#note3'),
		note4 = $('#note4'),
		note5 = $('#note5'),
		note6 = $('#note6'),
		ts = new Date(2015, 1, 14),
		newYear = true;
	
	if((new Date()) > ts){
	// 	// The new year is here! Count towards something else.
	// 	// Notice the *1000 at the end - time must be in milliseconds
	ts = target_time.valueOf()+1000*60*60*24;
	newYear = false;
	}

	
	$('.countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " дней" + ( days==1 ? '':'' ) + ", ";
			message += hours + " часов" + ( hours==1 ? '':'' ) + ", ";
			message += minutes + " минут" + ( minutes==1 ? '':'' ) + " и ";
			message += seconds + " секунд" + ( seconds==1 ? '':'' ) + " <br />";
			
			if(newYear){
				message += "";
			}
			else {
				message += "";
			}
			
			note.html(message);
			note2.html(message);
			note3.html(message);
			note4.html(message);
			note5.html(message);
			note6.html(message);
		}
	});

		$('.countdown2').countdown({timestamp: ts});
		$('.countdown3').countdown({timestamp: ts});
		$('.countdown4').countdown({timestamp: ts});
		$('.countdown5').countdown({timestamp: ts});
		$('.countdown6').countdown({timestamp: ts});
		

	//timer end


	//FORM

	 $('#form-base input[type=hidden]').val("Заявка с сайта СТО Харьков");
	 $('#timer-form input[type=hidden]').val("Заявка с сайта СТО Харьков");

	 $("#timer-form, #form-base").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/rest.php", //Change
			data: th.serialize()
		}).done(function() {
			//$('.mfp-wrap').css('display','none');
			//$('.mfp-bg').css('opacity','0');
			// alert("Спасибо за заявку! Скоро мы с Вами свяжемся!");
			$.magnificPopup.close();
			$(".send-message").css('display', 'block');
			setTimeout(function() {
				$(".send-message").css('display', 'none');
				th.trigger("reset");
			}, 3000);
			setTimeout(function() {
				var url = "http://euro-sto.com.ua/thank.html";
				$(location).attr('href',url);
			}, 3000);
			setTimeout(function() {
				var urlHome = "http://euro-sto.com.ua/";
				$(location).attr('href',urlHome);
			}, 8000);
		});
		return false;
	});

	 //Animation
	 $(".advantag-item").animated("zoomIn", "zoomOutDown");
	 $(".why-item").animated("fadeInDown", "fadeOut");
	 // $(".mp-gallery").animated("fadeInDown", "fadeOut");
	 $("#form-base").animated("fadeInUp");



}); // end function


$(window).on('load', function() {
	$('.preloader').delay(100).fadeOut('slow');
})