import { Component, OnInit } from '@angular/core';
import {Swiper,Navigation, Pagination, Autoplay} from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

constructor() { }

	ngOnInit(): void {
		$(document).ready(function() {
			new Swiper('.image-slider', {
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true,
				},
				touchRatio: 0.3,
				autoHeight: true,
				autoplay: {
					delay: 3000,
					stopOnLastSlide: false,
					disableOnInteraction: false
				},
				speed: 1000,
				
			});
			$('.image-slider-image').eq(0).css({'background': 'url("assets/img/bg1.jpg") no-repeat center/cover'});
        	$('.image-slider-image').eq(1).css({'background': 'url("assets/img/bg2.jpg") no-repeat center/cover'});
        	$('.image-slider-image').eq(2).css({'background': 'url("assets/img/bg3.jpg") no-repeat center/cover'});
			$('.sp span').css({'background': '#f26648'}).css({'height': '20px'}).css({'width': '20px'});
			$('.sp').css({'margin': '0 0 50px 0'});
			$('.swiper-pagination').css({'width': '120px'});
			$('.image-slider').css({'width':'100%'});
			$('.image-slider-wrapper').css({'width':'100%'});
			$('.image-slider-slide').css({'width':'100%'});
			$('.image-slider-image').css({'width':'100%'});

			if ($(window).width() <= 1024) {
				$('.image-slider').css({'height':'91vh'});
			}

			//mobile < 415px
			if($(window).width() < 415) {
				$('.slideDiv').css({'width': '80%'});
				$('.slideDiv img').css({'width': '100%'}).css({'objectFit': 'cover'});
			}

			// desctop size
			if ($(window).width() >= 1024) {
				$('#descNavWrap ul li a').eq(4).click(function() { //scroll to contacts
					window.scrollTo({
						top: $(document).height() - 990,
						  behavior: 'smooth'
					});
				});
		  
				$('#footerNavList ul li a').eq(4).click(function() { //scroll to contacts
					window.scrollTo({
						top: $(document).height() - 990,
						behavior: 'smooth'
					});
				});

				// nav hover for desctop nav wrapper
				$('#descNavWrap ul li a').mouseenter(function () {
					$(this).css({ 'border': '2px solid #f26648' }).css({ 'color': '#f26648' }).css({ 'padding': '9px 16px' });
				});
				$('#descNavWrap ul li a').mouseout(function () {
					$(this).css({ 'border': '0px solid #f26648' }).css({ 'color': '#fff' }).css({ 'padding': '11px 18px' });
				});

				// more details for portfolio
				$('#portfolio p').eq(1).click(function () {
					$('#descNavWrap ul li a').eq(1).css({ 'border': '2px solid #f26648' }).css({ 'color':'#f26648'}).css({'padding':'9px 16px'});
					setTimeout(function () {
						$('#descNavWrap ul li a').eq(1).css({ 'border': '0px solid #f26648' }).css({ 'color': '#fff' }).css({ 'padding': '11px 18px' });
					}, 2000);
				});

				// more details for services
				$('#services p').eq(3).click(function () {
					$('#descNavWrap ul li a').eq(2).css({ 'border': '2px solid #f26648' }).css({ 'color': '#f26648' }).css({ 'padding': '9px 16px' });
					setTimeout(function () {
						$('#descNavWrap ul li a').eq(2).css({ 'border': '0px solid #f26648' }).css({ 'color': '#fff' }).css({ 'padding': '11px 18px' });
					}, 2000);
				});
			
				// more details for about
				$('#about p').eq(1).click(function () {
					$('#descNavWrap ul li a').eq(3).css({ 'border': '2px solid #f26648' }).css({ 'color': '#f26648' }).css({ 'padding': '9px 16px' });
					setTimeout(function () {
						$('#descNavWrap ul li a').eq(3).css({ 'border': '0px solid #f26648' }).css({ 'color': '#fff' }).css({ 'padding': '11px 18px' });
					}, 2000);
				});
			}
		});
	}
}
