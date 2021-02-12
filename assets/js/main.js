jQuery(document).ready(function ($) {
	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow')
		} else {
			$('.back-to-top').fadeOut('slow')
		}
	})
	$('.back-to-top').click(function () {
		$('html, body').animate(
			{
				scrollTop: 0,
			},
			1500,
			'easeInOutExpo'
		)
		return false
	})

	// New updates

	$('#accordion').accordion({
		heightStyle: 'content',
	})

	$('#dialog').dialog({
		resizable: true,
		height: 'auto',
		width: 'auto',
		modal: true,
		autoOpen: false,
	})

	$('#dialoglink').on('click', function () {
		$('#dialog').dialog('open')
	})

	$('#dialog1').dialog({
		resizable: true,
		height: 'auto',
		modal: true,
		autoOpen: false,
	})

	$('#newInfo').on('click', function () {
		$('#dialog1').dialog('open')
	})

	// Stick the header at top on scroll
	$('#header').sticky({
		topSpacing: 0,
		zIndex: '50',
	})

	// Initiate superfish on nav menu
	$('.nav-menu').superfish({
		animation: {
			opacity: 'show',
		},
		speed: 400,
	})

	// Intro background carousel
	$('.owl-carousel').owlCarousel({
		autoplay: true,
		loop: true,
		items: 1,
		autoplayTimeout:5000,
	})
	

	// Initiate the wowjs animation library
	new WOW().init()

	// Smooth scroll for the menu and links with .scrollto classes
	$('.navbar-nav li a, #mobile-nav a, .scrollto').on('click', function () {
		if (
			location.pathname.replace(/^\//, '') ==
				this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash)
			if (target.length) {
				var top_space = 0

				if ($('#header').length) {
					top_space = $('#header').outerHeight()

					if (!$('#header').hasClass('header-fixed')) {
						top_space = top_space - 20
					}
				}

				$('html, body').animate(
					{
						scrollTop: target.offset().top - top_space,
					},
					1500,
					'easeInOutExpo'
				)

				if ($(this).parents('.nav-menu').length) {
					$('.navbar-nav li .menu-active').removeClass('menu-active')
					$(this).closest('li').addClass('menu-active')
				}

				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active')
					$('#mobile-nav-toggle i').toggleClass('fa-times fa-bars')
					$('#mobile-body-overly').fadeOut()
				}
				return false
			}
		}
	})

	// Porfolio - uses the magnific popup jQuery plugin
	$('.portfolio-popup').magnificPopup({
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-fade',
		gallery: {
			enabled: true,
		},
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function (openerElement) {
				return openerElement.is('img')
					? openerElement
					: openerElement.find('img')
			},
		},
	})
})
