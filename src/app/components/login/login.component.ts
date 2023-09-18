import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  value:any
  loginData:any = {
    "username" :"",
    "password" :""
  }
  constructor(private snack:MatSnackBar,private loginService:LoginService,private router:Router,private activatedRoute:ActivatedRoute){
     

  }


  ngOnInit(){
    this.value = this.activatedRoute.snapshot.queryParams["value"]
  }
  


  doSubmit(){

    if(this.loginData.username.trim()=='' || this.loginData.username == null)
    {
      this.snack.open('User name is required','',{
        duration:3000,
        verticalPosition:'top'
      });
      return;
    }

    if(this.loginData.password.trim()=='' || this.loginData.password == null)
    {
      this.snack.open('Password is required','',{
        duration:3000,
        verticalPosition:'top'
      });
      return;
    }

    //generate token
if(this.loginData.username != null && this.loginData.password != null)
{
    this.loginService.createToken(this.loginData).subscribe(
      (data:any)=>{
        console.log(data)
        this.loginService.setToken(data.token)
        this.loginService.currentUser().subscribe(
          (user:any)=>{
            this.loginService.setUserDetails(user)
            console.log(user)
            if(this.loginService.getUserRole()=="ADMIN"){
              //window.location.href="/admin-dashboard";
              this.loginService.isLoggedInStatus.next(true);
              this.router.navigate(['admin-dashboard'])
            }
            else if(this.loginService.getUserRole()=="NORMAL"){
              //window.location.href="/user-dashboard";
              this.loginService.isLoggedInStatus.next(true);
              this.router.navigate(['user-dashboard'])

            }
            else{
              this.loginService.isLoggedInStatus.next(false);
              this.loginService.logout();
              this.snack.open('Undefined User',"OK")
            }

          },
          (error)=>{
            this.snack.open('Something went wrong',"OK")
            console.log(error)
          }
        )

      },
      (error)=>{
        this.snack.open("Bad Credentials!!!","OK")
        console.log(error)

      }
    )

    
    
  }
}

}
