$(document).ready(function () {
	
	function setDroppDownButtonSize() {

		var $width = $("#card .wr .right-coll .buttons .btn-main.type2").outerWidth(),
			$height = $("#card .wr .right-coll .buttons .btn-main.type2").outerHeight(),
			$droppButton = $("#card .wr .right-coll .wr_size .select-dropp .select-wrapper");
		//$droppButton.outerHeight($height);
		$droppButton.outerWidth($width);
		
	}
	setTimeout(setDroppDownButtonSize, 40);
	
	$(window).on("resize", setDroppDownButtonSize);



	//check if mobile 
	var isMobile = false; //initiate as false
	// device detection
	if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
		/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

	if (!isMobile) {
		$('select').material_select({	});
		
	} else {
		$("#card .select-dropp").addClass("isMobile");
	};

	

	// менюшка каталога в мобильной версии
	$(".toggleAside").click(function () {
		$("aside.filter.sticky").toggleClass("isActive");
		$(".toggleAside").toggleClass("active1");
	})
	$(window).resize(function () {
		$("aside.filter.sticky").removeClass("isActive");
		$(".toggleAside").removeClass("active1");
	})



	objectFitImages("img.img_cont");

	

	$("#personal a").on("mouseenter", function () {
		$(this).parent().addClass("hov");
	})
	$("#personal a").on("mouseleave", function () {
		$(this).parent().removeClass("hov");
	})

	//droppdown button in card
	/*$('.dropdown-button').dropdown({
		inDuration: 300,
		outDuration: 225,
		constrainWidth: true, // Does not change width of dropdown to that of the activator
		hover: false, // Activate on hover
		gutter: 0, // Spacing from edge

		belowOrigin: true, // Displays dropdown below the button
		alignment: 'left', // Displays dropdown with edge aligned to the left of button
		stopPropagation: false // Stops event propagation
	});*/

	//parallax
	$('.parallax').parallax();

	//readmore
	$('.collapsible').collapsible({
		onOpen: function (el) {
			$('.readmore').readmore({
				speed: 200,
				collapsedHeight: 80,
				moreLink: '<a href="#"><span>показать еще</span>&nbsp;&darr;</a>',
				lessLink: '<a href="#"><span>Скрыть</span>&nbsp;&uarr;</a>'
			});
			$('.readmore2').readmore({
				speed: 80,
				collapsedHeight: 90,
				moreLink: '<a href="#"><span>показать еще</span>&nbsp;&darr;</a>',
				lessLink: '<a href="#"><span>Скрыть</span>&nbsp;&uarr;</a>'
			});
		},
	});




	//basket number 
	if (+$(".basket").attr("data-num")) {
		$(".basket").addClass("basket_num").css;
	}
	if (+$(".favourites").attr("data-num")) {
		$(".favourites").addClass("favourites_num").css;
	}


	//set dimensions 
	//$("#navigation").css("margin-top", $("#header").height());
	$("#navigation").css("margin-top", document.getElementById("header").offsetHeight);
	$("#catalog .wr .filter").css("top", $("#header").outerHeight() + $("#breadcrumbs").outerHeight() + 10);

	$("#catalog .wr .filter").css("top", document.getElementById("header").offsetHeight + $("#breadcrumbs").outerHeight() + 10);

	//$("#breadcrumbs").css("top", $("#header").height() + 10);
	$("#breadcrumbs").css("top", document.getElementById("header").offsetHeight + 10);

	//----------------
	//    $("#navigation").css("margin-top", $("#header").height());
	//    $("#catalog .wr .filter").css("top", $("#header").outerHeight() + $("#breadcrumbs").outerHeight() + 10);
	//    $("#breadcrumbs").css("top", $("#header").height() + 10);
	//--------------


	//behaviour of header by scrolling 
	function headerBehaviour1() {

		$.scrollDetection = function (options) {
			var settings = $.extend({
				scrollDown: function () {},
				scrollUp: function () {}
			}, options);

			var scrollPosition = 0;
			$(window).scroll(function () {
				var cursorPosition = $(this).scrollTop();
				if (cursorPosition > scrollPosition) {
					settings.scrollDown();
				} else if (cursorPosition < scrollPosition) {
					settings.scrollUp();
				}
				scrollPosition = cursorPosition;
			});
		};

		//        //----------------
		//        var $header = $("header");
		//        $.scrollDetection({
		//            scrollDown: function () {
		//                $header.addClass("header_hidden");
		//                $header.css("top", -$("#header").outerHeight());
		//                $("#catalog .wr .filter").css("top", $("#breadcrumbs").outerHeight() + 20);
		//                $("#breadcrumbs").css("top", 0);
		//            },
		//            scrollUp: function () {
		//                $header.removeClass("header_hidden");
		//                $header.css("top", "");
		//                $("#catalog .wr .filter").css("top", $("#header").outerHeight() + $("#breadcrumbs").outerHeight() + 10);
		//                $("#breadcrumbs").css("top", $("#header").height());
		//            }
		//        });
		//--------------


		var $header = $("header");
		$.scrollDetection({
			scrollDown: function () {
				$header.addClass("header_hidden");
				//$header.css("top", -$("#header").outerHeight());
				$header.css("top", -document.getElementById("header").offsetHeight);
				$("#catalog .wr .filter").css("top", $("#breadcrumbs").outerHeight() + 20);
				//$("#catalog .wr .filter").css("top", document.getElementById("breadcrumbs").offsetHeight + 20);
				$("#breadcrumbs").css("top", 0);
				$(".filter_mob_swipe").css("top", "");
			},
			scrollUp: function () {
				$header.removeClass("header_hidden");
				$header.css("top", "");
				$("#catalog .wr .filter").css("top", $("#header").outerHeight() + $("#breadcrumbs").outerHeight() + 10);
				//$("#catalog .wr .filter").css("top", document.getElementById("header").offsetHeight + document.getElementById("breadcrumbs").offsetHeight + 10);
				//$("#breadcrumbs").css("top", $("#header").height());
				$("#breadcrumbs").css("top", document.getElementById("header").offsetHeight);
				//$(".filter_mob_swipe").css("top", $("#header").height());
				$(".filter_mob_swipe").css("top", document.getElementById("header").offsetHeight);
			}
		});
	}

	headerBehaviour1();


	//WOW init
	new WOW().init();

	// slide and swipe menu init
	$('nav').slideAndSwipe();
	//$('.containSwipe').slideAndSwipe();

	$(".ssm-toggle-nav").on("click", function () {
		$("body").toggleClass("body_OH");
	});

	document.addEventListener("keydown", keyDownTextField, false);

	function keyDownTextField(e) {
		var keyCode = e.keyCode;
		if (keyCode == 27) {


		}
	}

	//slick-slider

	$('.responsive').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		dots: false,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false
				}
    },
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
    },
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});

	$('.responsive_1').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		dots: false,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false
				}
    },
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
    },
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});


	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		autoplay: true,
		autoplaySpeed: 3000,
		centerMode: true,
		arrows: true,
		centerPadding: 0,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
                }

            ]
	});

	$('.slider-for').slickLightbox({
		src: 'src',
		itemSelector: 'img'
	});




	//Form VAlidation 

	$("#js_register_form").validate({
		rules: {
			form_name: {
				required: true
			},
			form_email: {
				required: true,
				email: true
			},
			form_phone: {
				required: true,
				minlenhth: 10,
				digits: true
			},
		},
		messages: {
			form_name: {
				required: "Обязательное поле"
			},
			form_email: {
				required: "Обязательное поле",
				email: "Введите корректный Email"
			},
			form_phone: {
				required: "Обязательное поле"
			}
		},
		focusCleanup: true,
		focusInvalid: false
	});
	$("#js_register_form2").validate({
		rules: {
			form_name: {
				required: true
			},
			form_email: {
				required: true,
				email: true
			},
			form_phone: {
				required: true,
				minlength: 10,
				digits: true
			},
			form_passR: {
				equalTo: "#form_pass",
				minlength: 6
			},
			form_pass: {
				minlength: 6
			}
		},
		messages: {
			form_name: {
				required: "Обязательное поле"
			},
			form_email: {
				required: "Обязательное поле",
				email: "Введите корректный Email"
			},
			form_phone: {
				required: "Обязательное поле",
				minlength: "Пароль не менее 6 символов"
			},
			form_passR: {
				equalTo: "Пароли не совпадают",
				minlength: "Пароль не менее 6 символов"
			}
		},
		focusCleanup: true,
		focusInvalid: false
	});

	//phone input mask

	//		 $("#form_phone, #form_phone2").mask("(999) 999-99-99");
	$("#form_phone, #form_phone2").mask('(000) 000-00-00');



	// buttton UP
	// button arrow to UP

	$("body").append("<button class='btn_up'/>");

	$(window).scroll(function () {
		var windscroll = $(window).scrollTop();
		if ($(window).scrollTop() > 50) {
			$(".btn_up").addClass("activeB");
		} else {
			$(".btn_up").removeClass("activeB");
		}

	});

	$(".btn_up").on("click", function (e) {
		e.preventDefault();
		$(this).removeClass("activeB");
		$("body").animate({
			'scrollTop': 0
		}, 800);
		$("html").animate({
			'scrollTop': 0
		}, 800);

	});

	$(window).on("resize", setTopAside);

	function setTopAside() {
		$("header nav").css("top", document.getElementById("header").offsetHeight);
		$("header .ssm-overlay").css("top", document.getElementById("header").offsetHeight);
	}
	setTopAside();

	$('.sticky').Stickyfill();


});
