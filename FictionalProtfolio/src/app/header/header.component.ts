import { Component } from '@angular/core';
import { Router,Route } from '@angular/router';
import { window } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  homeClass:any="";
  portfolioClass:any="";

  constructor(private router:Router){
    let routerObj:any = router;
    if(routerObj.location.path()=="/home") {
      this.navigateToHome();
    }
    else if(routerObj.location.path()=="/portfolio"){
      this.navigateToPortfolio();
    }else{
      this.navigateToHome();
    }
    }


  ngOnInit(){
    
  }

  navigateToHome(){
   this.homeClass="activeClass";
   this.portfolioClass="inactiveClass";
  }

  navigateToPortfolio(){
    this.homeClass="inactiveClass";
    this.portfolioClass="activeClass";
  }

}
