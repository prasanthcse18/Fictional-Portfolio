import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"home",component:HomeComponent,pathMatch:'full'},
  {path:"portfolio",component:PortfolioComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
