import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('h3').even().css({'color':'#fff'});
      $('h3').odd().css({'color':'#f26648'});
      $('h3').last().css({'color':'#fff'});
      $('.title').even().css({'color':'#fff'});
      $('.titleBtn').odd().css({'color':'#fff'});
      $('.title').odd().css({'color':'#f26648'});
      $('.titleBtn').odd().css({'color':'#f26648'}).css({'borderBottom':'1px solid #f26648'});
      $('.titleBtn').odd().mouseenter(function() {
        $(this).css({'color':'rgba(39, 44, 45, 1)'});
      });
      $('.titleBtn').odd().mouseout(function() {
        $(this).css({'color':'#f26648'});
      });

      $('.title').hide();
          $('.titleBtn').eq(0).click(function() {
            $('.title').eq(0).slideToggle();
          });
          $('.titleBtn').eq(1).click(function() {
            $('.title').eq(1).slideToggle();
          });
          $('.titleBtn').eq(2).click(function() {
            $('.title').eq(2).slideToggle();
          });
          $('.titleBtn').eq(3).click(function() {
            $('.title').eq(3).slideToggle();
          });
          $('.titleBtn').eq(4).click(function() {
            $('.title').eq(4).slideToggle();
          });
          $('.titleBtn').eq(5).click(function() {
            $('.title').eq(5).slideToggle();
          });
          $('.titleBtn').eq(6).click(function() {
            $('.title').eq(6).slideToggle();
          });
          $('.titleBtn').eq(7).click(function() {
            $('.title').eq(7).slideToggle();
          });
          $('.titleBtn').eq(8).click(function() {
            $('.title').eq(8).slideToggle();
          });
          $('.titleBtn').eq(9).click(function() {
            $('.title').eq(9).slideToggle();
          });
          $('.titleBtn').eq(10).click(function() {
            $('.title').eq(10).slideToggle();
          });
          $('.titleBtn').eq(11).click(function() {
            $('.title').eq(11).slideToggle();
          });
          $('.titleBtn').eq(12).click(function() {
            $('.title').eq(12).slideToggle();
          });
          $('.titleBtn').eq(13).click(function() {
            $('.title').eq(13).slideToggle();
          });
          $('.titleBtn').eq(14).click(function() {
            $('.title').eq(14).slideToggle();
          });

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

            $('i').eq(2).mouseenter(function() { // section 1 func
              $('img').eq(0).css('transform', 'scale(1.11)');
              $(this).fadeIn();
            });
            $('img').eq(0).mouseenter(function() {
              $(this).css('transform', 'scale(1.11)');
              $('i').eq(2).fadeIn();
            });
            $('img').eq(0).mouseout(function() {
              $(this).css('transform', 'scale(1)').css({'transition':'0.3s'});
              $('i').eq(2).fadeOut();
            });

            $('i').eq(3).mouseenter(function() { // section 2 func
              $('img').eq(1).css('transform', 'scale(1.11)');
              $(this).fadeIn();
            });
            $('img').eq(1).mouseenter(function() {
              $(this).css('transform', 'scale(1.11)');
              $('i').eq(3).fadeIn();
            });
            $('img').eq(1).mouseout(function() {
              $(this).css('transform', 'scale(1)').css({'transition':'0.3s'});
              $('i').eq(3).fadeOut();
            });

            $('i').eq(4).mouseenter(function() { // section 3 func
              $('img').eq(2).css('transform', 'scale(1.11)');
              $(this).fadeIn();
            });
            $('img').eq(2).mouseenter(function() {
              $(this).css('transform', 'scale(1.11)');
              $('i').eq(4).fadeIn();
            });
            $('img').eq(2).mouseout(function() {
              $(this).css('transform', 'scale(1)').css({'transition':'0.3s'});
              $('i').eq(4).fadeOut();
            });

            $('i').eq(5).mouseenter(function() { // section 4 func
              $('img').eq(3).css('transform', 'scale(1.11)');
              $(this).fadeIn();
            });
            $('img').eq(3).mouseenter(function() {
              $(this).css('transform', 'scale(1.11)');
              $('i').eq(5).fadeIn();
            });
            $('img').eq(3).mouseout(function() {
              $(this).css('transform', 'scale(1)').css({'transition':'0.3s'});
              $('i').eq(5).fadeOut();
            });

            $('i').eq(6).mouseenter(function() { // section 5 func
              $('img').eq(4).css('transform', 'scale(1.11)');
              $(this).fadeIn();
            });
            $('img').eq(4).mouseenter(function() {
              $(this).css('transform', 'scale(1.11)');
              $('i').eq(6).fadeIn();
            });
            $('img').eq(4).mouseout(function() {
              $(this).css('transform', 'scale(1)').css({'transition':'0.3s'});
              $('i').eq(6).fadeOut();
            });

            $('i').eq(7).mouseenter(function() { // section 6 func
              $('img').eq(5).css('transform', 'scale(1.11)');
              $(this).fadeIn();
            });
            $('img').eq(5).mouseenter(function() {
              $(this).css('transform', 'scale(1.11)');
              $('i').eq(7).fadeIn();
            });
            $('img').eq(5).mouseout(function() {
              $(this).css('transform', 'scale(1)').css({'transition':'0.3s'});
              $('i').eq(7).fadeOut();
            });

            $('i').eq(8).mouseenter(function() { // section 7 func
              $('img').eq(6).css('transform', 'scale(1.11)');
              $(this).fadeIn();
            });
            $('img').eq(6).mouseenter(function() {
              $(this).css('transform', 'scale(1.11)');
              $('i').eq(8).fadeIn();
            });
            $('img').eq(6).mouseout(function() {
              $(this).css('transform', 'scale(1)').css({'transition':'0.3s'});
              $('i').eq(8).fadeOut();
            });

            $('i').eq(9).mouseenter(function() { // section 8 func
              $('img').eq(7).css('transform', 'scale(1.11)');
              $(this).fadeIn();
            });
            $('img').eq(7).mouseenter(function() {
              $(this).css('transform', 'scale(1.11)');
              $('i').eq(9).fadeIn();
            });
            $('img').eq(7).mouseout(function() {
              $(this).css('transform', 'scale(1)').css({'transition':'0.3s'});
              $('i').eq(9).fadeOut();
            });

            $('i').eq(10).mouseenter(function() { // section 9 func
              $('img').eq(8).css('transform', 'scale(1.11)');
              $(this).fadeIn();
            });
            $('img').eq(8).mouseenter(function() {
              $(this).css('transform', 'scale(1.11)');
              $('i').eq(10).fadeIn();
            });
            $('img').eq(8).mouseout(function() {
              $(this).css('transform', 'scale(1)').css({'transition':'0.3s'});
              $('i').eq(10).fadeOut();
            });

            $('i').eq(11).mouseenter(function() { // section 10 func
              $('img').eq(9).css('transform', 'scale(1.11)');
              $(this).fadeIn();
            });
            $('img').eq(9).mouseenter(function() {
              $(this).css('transform', 'scale(1.11)');
              $('i').eq(11).fadeIn();
            });
            $('img').eq(9).mouseout(function() {
              $(this).css('transform', 'scale(1)').css({'transition':'0.3s'});
              $('i').eq(11).fadeOut();
            });

            $('i').eq(12).mouseenter(function() { // section 11 func
              $('img').eq(10).css('transform', 'scale(1.11)');
              $(this).fadeIn();
            });
            $('img').eq(10).mouseenter(function() {
              $(this).css('transform', 'scale(1.11)');
              $('i').eq(12).fadeIn();
            });
            $('img').eq(10).mouseout(function() {
              $(this).css('transform', 'scale(1)').css({'transition':'0.3s'});
              $('i').eq(12).fadeOut();
            });

            $('i').eq(13).mouseenter(function() { // section 12 func
              $('img').eq(11).css('transform', 'scale(1.11)');
              $(this).fadeIn();
            });
            $('img').eq(11).mouseenter(function() {
              $(this).css('transform', 'scale(1.11)');
              $('i').eq(13).fadeIn();
            });
            $('img').eq(11).mouseout(function() {
              $(this).css('transform', 'scale(1)').css({'transition':'0.3s'});
              $('i').eq(13).fadeOut();
            });

             $('i').eq(14).mouseenter(function() { // section 13 func
              $('img').eq(12).css('transform', 'scale(1.11)');
              $(this).fadeIn();
            });
            $('img').eq(12).mouseenter(function() {
              $(this).css('transform', 'scale(1.11)');
              $('i').eq(14).fadeIn();
            });
            $('img').eq(12).mouseout(function() {
              $(this).css('transform', 'scale(1)').css({'transition':'0.3s'});
              $('i').eq(14).fadeOut();
            });

            $('i').eq(15).mouseenter(function() { // section 14 func
              $('img').eq(13).css('transform', 'scale(1.11)');
              $(this).fadeIn();
            });
            $('img').eq(13).mouseenter(function() {
              $(this).css('transform', 'scale(1.11)');
              $('i').eq(15).fadeIn();
            });
            $('img').eq(13).mouseout(function() {
              $(this).css('transform', 'scale(1)').css({'transition':'0.3s'});
              $('i').eq(15).fadeOut();
            });

            $('i').eq(16).mouseenter(function() { // section 14 func
              $('img').eq(14).css('transform', 'scale(1.11)');
              $(this).fadeIn();
            });
            $('img').eq(14).mouseenter(function() {
              $(this).css('transform', 'scale(1.11)');
              $('i').eq(16).fadeIn();
            });
            $('img').eq(14).mouseout(function() {
              $(this).css('transform', 'scale(1)').css({'transition':'0.3s'});
              $('i').eq(16).fadeOut();
            });
          }
    });
    
  }

}
