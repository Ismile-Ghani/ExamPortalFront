import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  

  constructor(private userService:UserService){}

  user:any = {
    "username" :"",
    "password" :"",
    "firstname" :"",
    "lastname" :"",
    "email" :"",
    "phone" :""
  }

  onSubmit(){
    alert("in form")
    this.userService.addUser(this.user).subscribe(
      (data)=>{
          alert('Successfully Registered')
          console.log(data)
      },
      (error)=>{
          alert('Something went wrong')
          console.log(error)
      }

    );
  }

}
