import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllComponent } from './all/all.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { MainComponent } from './main/main.component';
import { MaterializeComponent } from './materialize/materialize.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OtherComponent } from './other/other.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'portfolio', component: PortfolioComponent, children: [
    {path: 'all', component: AllComponent},
    {path: 'bootstrap', component: BootstrapComponent},
    {path: 'materialize', component: MaterializeComponent},
    {path: 'responsive', component: ResponsiveComponent},
    {path: 'other', component: OtherComponent}
  ]},
  {path: 'services', component: ServicesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'error', component: NotfoundComponent},
  {path: '**', redirectTo: 'error'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
