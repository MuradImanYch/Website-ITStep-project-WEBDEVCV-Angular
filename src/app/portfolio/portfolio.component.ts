import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('#mobfilterWrap').hide();
      $('.container i, span').click(function() {
        $('#mobfilterWrap').slideToggle();
      });

      $('#mobfilterWrap li').click(function() {
        $('img, h3').hide();
        $('img, h3').fadeIn(300);
      });

      $('#descFilterWrap li').click(function() {
        $('img, h3').hide();
        $('img, h3').fadeIn(300);
      });
    });
  }

}
