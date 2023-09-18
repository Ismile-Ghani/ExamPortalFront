import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  

  constructor(private userService:UserService,private snack:MatSnackBar){}

  user:any = {
    "username" :"",
    "password" :"",
    "firstname" :"",
    "lastname" :"",
    "email" :"",
    "phone" :""
  }

  onSubmit(){
    if(this.user.username == null || this.user.username == '')
    {
      this.snack.open('User Name is required','',{
        duration:3000,
        verticalPosition:'top'
      });
      return;
    }
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        this.snack.open('Successsfully Registered','',{
          duration:3000,
          verticalPosition:'top'
        });
        
          console.log(data)
      },
      (error)=>{
        this.snack.open('Something went wrong','',{
          duration:3000,
          verticalPosition:'top'
        });
        
          console.log(error)
      }

    );
  }

}
