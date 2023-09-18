import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user:any = {}

  constructor(public login:LoginService,private router:Router){}

  

  ngOnInit():void{
    
    this.login.isLoggedInStatus.subscribe((status)=>{
      this.isLoggedIn = status;
      this.user = this.login.getUserDetails();
    })
  }

  public logout(){
    this.login.logout()
    this.user=null
    this.router.navigate(['login'],{
      queryParams: {
        value: "Logged Out Successfully!!!",
      },
    })
  }

}
