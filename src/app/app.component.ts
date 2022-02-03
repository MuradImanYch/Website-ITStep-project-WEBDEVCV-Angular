import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webdevcv';

  ngOnInit() {
    $(document).ready(function() {
		$('main').hide();
		$('main').fadeIn(500);
      // made with ico colors
      $('#madeWith i').eq(0).css({'color':'#e44d26'});
      $('#madeWith i').eq(1).css({'color':'#1673b6'});
      $('#madeWith i').eq(2).css({'color':'#f7df1e'});
      $('#madeWith i').eq(3).css({'color':'#e23237'});

	  $('#mobNavWrap').hide();  // mobNavWrap sliding toggle

	  		// mob menu toggle
			let menuToggle = false;
			$('nav i').eq(0).click(function () { 
				$('#mobNavWrap').slideToggle();
				menuToggle = !menuToggle;
				if (menuToggle == true) {
					$(this).attr('class', 'fas fa-times');
				}
				else {
					$(this).attr('class', 'fas fa-bars');
				}
			});

			$('#mobNavWrap li').click(function() {
				menuToggle = !menuToggle;
				$('#mobNavWrap').slideUp('fast');
				$('nav i').attr('class', 'fas fa-bars');
			});
  
      function progressBar() { // scroll progressBar func
        let windScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (windScroll / docHeight) * 100;
        $("#progressBar").css({ width: scrolled + "%" });
      }
      window.onscroll = function () { // scroll progressBar func call 
        progressBar();
      }

      $('#scrollDiv').click(function() { //scroll top
        window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	  });
	  $('h1').click(function() {
		window.scrollTo({
			top: 0
		});
		$('title').text('Webdevcv | Main');
		$('main').hide();
		$('main').fadeIn(300);
	  });
	  $('#descNavWrap ul li').eq(0).click(function() {
		$('title').text('Webdevcv | Main');
	  });
	  $('#descNavWrap ul li').eq(1).click(function() {
		$('title').text('Webdevcv | Portfolio');
	  });
	  $('#descNavWrap ul li').eq(2).click(function() {
		$('title').text('Webdevcv | Services');
	  });
	  $('#descNavWrap ul li').eq(3).click(function() {
		$('title').text('Webdevcv | About me');
	  });

	  $('#footerNavList ul li').eq(0).click(function() {
		$('title').text('Webdevcv | Main');
	  });
	  $('#footerNavList ul li').eq(1).click(function() {
		$('title').text('Webdevcv | Portfolio');
	  });
	  $('#footerNavList ul li').eq(2).click(function() {
		$('title').text('Webdevcv | Services');
	  });
	  $('#footerNavList ul li').eq(3).click(function() {
		$('title').text('Webdevcv | About me');
	  });

      if ($(window).width() < 1024) {
		  $('#mobNavWrap ul li').eq(0).click(function() {
			$('title').text('Webdevcv | Main');
		  });
		  $('#mobNavWrap ul li').eq(1).click(function() {
			$('title').text('Webdevcv | Portfolio');
		  });
		  $('#mobNavWrap ul li').eq(2).click(function() {
			$('title').text('Webdevcv | Services');
		  });
		  $('#mobNavWrap ul li').eq(3).click(function() {
			$('title').text('Webdevcv | About me');
		  });
				// nav hover for mobile nav wrapper
				$('#mobNavWrap ul li a').mouseenter(function () {
					$(this).css({ 'backgroundColor': '#f26648'});
					setTimeout(function () {
						$('#mobNavWrap ul li a').css({ 'backgroundColor': 'rgba(39, 44, 45, 0)' });
					}, 1500);
				});

				$('#mobNavWrap li:not(li:last-child)').click(function() {
					window.scrollTo({
						top: 0
					});
					$('main').hide();
					$('main').fadeIn(300);
				});
				$('#footerNavList li:not(li:last-child)').click(function() {
					window.scrollTo({
						top: 0
					});
					$('main').hide();
					$('main').fadeIn(300);
				});
				

				// more details for portfolio
				$('#portfolio p').eq(1).click(function () { 
					$('#mobNavWrap').slideToggle();
					menuToggle = !menuToggle;
					if (menuToggle == true) {
						$('nav i').attr('class', 'fas fa-times');
					}
					else {
						$('nav i').attr('class', 'fas fa-bars');
					}
				});
				$('#portfolio p').eq(1).click(function () {
				$('#mobNavWrap ul li a').eq(1).css({ 'backgroundColor': '#f26648' });
					setTimeout(function () {
					$('#mobNavWrap ul li a').eq(1).css({ 'backgroundColor': 'rgba(39, 44, 45, 0)' });
					}, 1000);
				});

				// more details for services
				$('#services p').eq(3).click(function () {
					$('#mobNavWrap').slideToggle();
					menuToggle = !menuToggle;
					if (menuToggle == true) {
						$('nav i').attr('class', 'fas fa-times');
					}
					else {
						$('nav i').attr('class', 'fas fa-bars');
					}
				});
				$('#services p').eq(3).click(function() {
					$('#mobNavWrap ul li a').eq(2).css({ 'backgroundColor': '#f26648'});
					setTimeout(function () {
						$('#mobNavWrap ul li a').eq(2).css({ 'backgroundColor': 'rgba(39, 44, 45, 0)' });
					}, 1000);
				});
			
				// more details for about
				$('#about p').eq(1).click(function () {
					$('#mobNavWrap').slideToggle();
					menuToggle = !menuToggle;
					if (menuToggle == true) {
						$('nav i').attr('class', 'fas fa-times');
					}
					else {
						$('nav i').attr('class', 'fas fa-bars');
					}
				});
				$('#about p').eq(1).click(function() {
					$('#mobNavWrap ul li a').eq(3).css({ 'backgroundColor': '#f26648'});
					setTimeout(function () {
						$('#mobNavWrap ul li a').eq(3).css({ 'backgroundColor': 'rgba(39, 44, 45, 0)' });
					}, 1000);
				});

				$('#mobNavWrap ul li a').eq(4).click(function() {
          			window.scrollTo({
            			top: $(document).height() - 990,
            			behavior: 'smooth'
          			}); // scroll to contacts
        		});

				$('#footerNavList ul li a').eq(4).click(function() { //scroll to contacts
					window.scrollTo({
						top: $(document).height() - 990,
						behavior: 'smooth'
					});
				});
			}

      if ($(window).width() <= 320) {
        $('#contacts form textarea').attr({'cols':'35'});
      }
      if ($(window).width() > 320) {
        $('#contacts form textarea').attr({'cols':'45'});
      }
      if ($(window).width() >= 768) {
        $('#contacts form textarea').attr({'cols':'75'});
      }
      if ($(window).width() >= 1024) {
		$('#contacts form textarea').attr({'cols':'120'});

		$('#descNavWrap li:not(li:last-child)').click(function() {
			window.scrollTo({
				top: 0
			});
			$('main').hide();
			$('main').fadeIn(300);
		});
		$('#footerNavList li:not(li:last-child)').click(function() {
			window.scrollTo({
				top: 0
			});
			$('main').hide();
			$('main').fadeIn(300);
		});
	
        // scroll arrow show
        $('#scrollDiv').hide();
        $(window).scroll(function () {
            if ($(window).scrollTop() > 450) {
                $('#scrollDiv').fadeIn();
            }
            else {
                $('#scrollDiv').fadeOut();
            }
		});
		
		

      }
      if ($(window).width() < 1024) {
        // scroll arrow show
        $('#scrollDiv').hide();
        $(window).scroll(function () {
            if ($(window).scrollTop() > 450) {
                $('#scrollDiv').fadeIn();
            }
            else {
                $('#scrollDiv').fadeOut();
            }
		});
		
		$('h1').click(function() {
			$('#mobNavWrap').slideUp('fast');
			$('nav i').attr('class', 'fas fa-bars');
			menuToggle = false;
		});

	  }
	  let date = new Date();
	  $('#year').text(date.getFullYear()).css({'fontSize':'1em'});
    });
  }
  
}
