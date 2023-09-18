import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedInStatus = new BehaviorSubject(false);

  constructor(private http:HttpClient) { }

  public currentUser(){
    return this.http.get(`${baseUrl}/currentUser`)
  }

  public createToken(loginData:any){
    return this.http.post(`${baseUrl}/generate-token`,loginData)
  }

  //set token in localstorage
  public setToken(token:any){
    localStorage.setItem("token",token)
    return true;
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem("token")

    if(tokenStr==undefined || tokenStr == '' || tokenStr == null){
      //this.isLoggedInStatus.next(false);
      return false
    }
    else{
      //this.isLoggedInStatus.next(true);
      return true
    }
    

  }

  public logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("userDetail")
    //this.isLoggedInStatus.next(false);
    return true;
  }

  public getToken(){
    return localStorage.getItem("token")

  }

  public setUserDetails(user:any){
    localStorage.setItem("userDetail",JSON.stringify(user))
  }

  public getUserDetails(){
    let userDetail = localStorage.getItem("userDetail")
    if(userDetail != null){
      return JSON.parse(userDetail)
    }
    else{
      this.logout()
      return null
    }
  }

  public getUserRole(){
    let user = this.getUserDetails()
    return user.authorities[0].authority
  }

}
