import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() { // more info sliding
      $('.info').hide();

      $('.cards').eq(0).click(function() {
        $('.info').eq(0).slideToggle();
      });
      $('.cards').eq(1).click(function() {
        $('.info').eq(1).slideToggle();
      });
      $('.cards').eq(2).click(function() {
        $('.info').eq(2).slideToggle();
      });
      $('.cards').eq(3).click(function() {
        $('.info').eq(3).slideToggle();
      });
      $('.cards').eq(4).click(function() {
        $('.info').eq(4).slideToggle();
      });
      $('.cards').eq(5).click(function() {
        $('.info').eq(5).slideToggle();
      });
      
      $('button').eq(0).click(function() {
        $('.info').eq(0).fadeOut();
      });
      $('button').eq(1).click(function() {
        $('.info').eq(1).fadeOut();
      });
      $('button').eq(2).click(function() {
        $('.info').eq(2).fadeOut();
      });
      $('button').eq(3).click(function() {
        $('.info').eq(3).fadeOut();
      });
      $('button').eq(4).click(function() {
        $('.info').eq(4).fadeOut();
      });
      $('button').eq(5).click(function() {
        $('.info').eq(5).fadeOut();
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
    });
  }

}
