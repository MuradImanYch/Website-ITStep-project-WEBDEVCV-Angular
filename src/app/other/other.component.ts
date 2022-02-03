import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

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
      }

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

      $('i').eq(5).mouseenter(function() { // section 3 func
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
    });
  }

}
