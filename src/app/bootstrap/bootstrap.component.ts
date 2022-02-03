import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css']
})
export class BootstrapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('.title').hide();
      $('.titleBtn').eq(0).click(function() {
        $('.title').eq(0).slideToggle();
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
      }

    });
  }

}
