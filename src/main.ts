import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  
  if ($(window).width() >= 1024) {
    let toggle = false; // user counter func
    $('#userCount i').click(function() {
      toggle = !toggle;
      if(toggle == true) {
        $('#userCount').animate({'left':'0'});
        $('#userCount i').attr({'class':'fas fa-chevron-left'});
      }
      else {
        $('#userCount').animate({'left':'-8%'});
        $('#userCount i').attr({'class':'fas fa-chevron-right'});
      }
    });
    $('#langDiv').css({'left': '-180px'});
  }

  if ($(window).width() <= 768) {
    let toggle = false; // user counter func
    $('#userCount i').click(function() {
      toggle = !toggle;
      if(toggle == true) {
        $('#userCount').animate({'left':'0'});
        $('#userCount i').attr({'class':'fas fa-chevron-left'});
      }
      else {
        $('#userCount').animate({'left':'-15%'});
        $('#userCount i').attr({'class':'fas fa-chevron-right'});
      }

    });
    $('#langDiv').css({'left': '-190px'});
  }

  if ($(window).width() <= 414) {
    let toggle = false; // user counter func
    $('#userCount i').click(function() {
      toggle = !toggle;
      if(toggle == true) {
        $('#userCount').animate({'left':'0'});
        $('#userCount i').attr({'class':'fas fa-chevron-left'});
      }
      else {
        $('#userCount').animate({'left':'-28%'});
        $('#userCount i').attr({'class':'fas fa-chevron-right'});
      }

    });
  }

  if ($(window).width() < 414) { // user counter func
    $('#userCount').css({'width':'135px'});
  }

