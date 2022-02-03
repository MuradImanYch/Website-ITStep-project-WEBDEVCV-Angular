import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('.square').eq(0).css({"background": "url('../assets/ico/fb.png') no-repeat center/cover"}).css({'backgroundPosition':'0px'});
      $('.square').eq(0).mouseenter(function() {
        $(this).css({'backgroundPosition':'-57px'});
      });
      $('.square').eq(0).mouseout(function() {
        $(this).animate({'backgroundPosition':'0px'});
      });

      $('.square').eq(1).css({"background": "url('../assets/ico/insta.png') no-repeat center/cover"}).css({'backgroundPosition':'0px'});
      $('.square').eq(1).mouseenter(function() {
        $(this).css({'backgroundPosition':'-57px'});
      });
      $('.square').eq(1).mouseout(function() {
        $(this).animate({'backgroundPosition':'0px'});
      });

      $('.square').eq(2).css({"background": "url('../assets/ico/in.png') no-repeat center/cover"}).css({'backgroundPosition':'0px'});
      $('.square').eq(2).mouseenter(function() {
        $(this).css({'backgroundPosition':'-57px'});
      });
      $('.square').eq(2).mouseout(function() {
        $(this).animate({'backgroundPosition':'0px'});
      });

      $('.square').eq(3).css({"background": "url('../assets/ico/vk.png') no-repeat center/cover"}).css({'backgroundPosition':'0px'});
      $('.square').eq(3).mouseenter(function() {
        $(this).css({'backgroundPosition':'-57px'});
      });
      $('.square').eq(3).mouseout(function() {
        $(this).animate({'backgroundPosition':'0px'});
      });

      if($(window).width() < 1024) {        
        $(window).scroll(function() {
          if(document.documentElement.scrollTop > 140) {
            $('.progress').eq(0).css({'transition':'0.8s'}).css('width','150px').css({'backgroundColor':'#00cf37'});
          }
          if(document.documentElement.scrollTop > 190) {
            $('.progress').eq(1).css({'transition':'0.8s'}).css('width','150px').css({'backgroundColor':'#00cf37'});
          }
          if(document.documentElement.scrollTop > 240) {
            $('.progress').eq(2).css({'transition':'0.8s'}).css('width','150px').css({'backgroundColor':'#00cf37'});
          }
          if(document.documentElement.scrollTop > 290) {
            $('.progress').eq(3).css({'transition':'0.8s'}).css('width','100px').css({'backgroundColor':'#bcff2b'});
          }
          if(document.documentElement.scrollTop > 340) {
            $('.progress').eq(4).css({'transition':'0.8s'}).css('width','100px').css({'backgroundColor':'#bcff2b'});
          }
          if(document.documentElement.scrollTop > 390) {
            $('.progress').eq(5).css({'transition':'0.8s'}).css('width','120px').css({'backgroundColor':'#95ff00'});
          }
          if(document.documentElement.scrollTop > 440) {
            $('.progress').eq(6).css({'transition':'0.8s'}).css('width','120px').css({'backgroundColor':'#95ff00'});
          }
          if(document.documentElement.scrollTop > 490) {
            $('.progress').eq(7).css({'transition':'0.8s'}).css('width','140px').css({'backgroundColor':'#6edb1a'});
          }
          if(document.documentElement.scrollTop > 540) {
            $('.progress').eq(8).css({'transition':'0.8s'}).css('width','60px').css({'backgroundColor':'#ff9b21'});
          }
          if(document.documentElement.scrollTop > 590) {
            $('.progress').eq(9).css({'transition':'0.8s'}).css('width','20px').css({'backgroundColor':'#ff9b21'});
          }
          if(document.documentElement.scrollTop > 640) {
            $('.progress').eq(10).css({'transition':'0.8s'}).css('width','100px').css({'backgroundColor':'#bcff2b'});
          }
          if(document.documentElement.scrollTop > 690) {
            $('.progress').eq(11).css({'transition':'0.8s'}).css('width','100px').css({'backgroundColor':'#bcff2b'});
          }
          if(document.documentElement.scrollTop > 740) {
            $('.progress').eq(12).css({'transition':'0.8s'}).css('width','110px').css({'backgroundColor':'#bcff2b'});
          }
          if(document.documentElement.scrollTop > 790) {
            $('.progress').eq(13).css({'transition':'0.8s'}).css('width','120px').css({'backgroundColor':'#95ff00'});
          }
          if(document.documentElement.scrollTop > 840) {
            $('.progress').eq(14).css({'transition':'0.8s'}).css('width','90px').css({'backgroundColor':'#bcff2b'});
          }
        });
      }

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
        
        $(window).scroll(function() {
          if(document.documentElement.scrollTop > 140) {
            $('.progress').eq(0).css({'transition':'0.8s'}).css('width','500px').css({'backgroundColor':'#00cf37'});
          }
          if(document.documentElement.scrollTop > 190) {
            $('.progress').eq(1).css({'transition':'0.8s'}).css('width','500px').css({'backgroundColor':'#00cf37'});
          }
          if(document.documentElement.scrollTop > 240) {
            $('.progress').eq(2).css({'transition':'0.8s'}).css('width','500px').css({'backgroundColor':'#00cf37'});
          }
          if(document.documentElement.scrollTop > 290) {
            $('.progress').eq(3).css({'transition':'0.8s'}).css('width','380px').css({'backgroundColor':'#bcff2b'});
          }
          if(document.documentElement.scrollTop > 340) {
            $('.progress').eq(4).css({'transition':'0.8s'}).css('width','380px').css({'backgroundColor':'#bcff2b'});
          }
          if(document.documentElement.scrollTop > 390) {
            $('.progress').eq(5).css({'transition':'0.8s'}).css('width','460px').css({'backgroundColor':'#95ff00'});
          }
          if(document.documentElement.scrollTop > 440) {
            $('.progress').eq(6).css({'transition':'0.8s'}).css('width','460px').css({'backgroundColor':'#95ff00'});
          }
          if(document.documentElement.scrollTop > 490) {
            $('.progress').eq(7).css({'transition':'0.8s'}).css('width','500px').css({'backgroundColor':'#6edb1a'});
          }
          if(document.documentElement.scrollTop > 540) {
            $('.progress').eq(8).css({'transition':'0.8s'}).css('width','60px').css('width','90px').css({'backgroundColor':'#ff9b21'});
          }
          if(document.documentElement.scrollTop > 590) {
            $('.progress').eq(9).css({'transition':'0.8s'}).css('width','60px').css('width','70px').css({'backgroundColor':'#ff9b21'});
          }
          if(document.documentElement.scrollTop > 640) {
            $('.progress').eq(10).css({'transition':'0.8s'}).css('width','380px').css({'backgroundColor':'#bcff2b'});
          }
          if(document.documentElement.scrollTop > 690) {
            $('.progress').eq(11).css({'transition':'0.8s'}).css('width','380px').css({'backgroundColor':'#bcff2b'});
          }
          if(document.documentElement.scrollTop > 740) {
            $('.progress').eq(12).css({'transition':'0.8s'}).css('width','390px').css({'backgroundColor':'#bcff2b'});
          }
          if(document.documentElement.scrollTop > 790) {
            $('.progress').eq(13).css({'transition':'0.8s'}).css('width','460px').css({'backgroundColor':'#bcff2b'});
          }
          if(document.documentElement.scrollTop > 840) {
            $('.progress').eq(14).css({'transition':'0.8s'}).css('width','360px').css({'backgroundColor':'#bcff2b'});
          }
        });
      }
    });
  }

}
