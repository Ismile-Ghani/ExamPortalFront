import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetails:any = {}

  constructor(public loginService:LoginService){


  }

  ngOnInit(): void {
    this.userDetails = this.loginService.getUserDetails()

  }



}
