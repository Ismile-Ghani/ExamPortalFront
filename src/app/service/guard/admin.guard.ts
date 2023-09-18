import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { inject } from '@angular/core';


export const adminGuard: CanActivateFn = (_route, _state) => {

  const loginService:LoginService = inject(LoginService);
  const router:Router = inject(Router);

  if(loginService.isLoggedIn() && loginService.getUserRole() == "ADMIN"){
    return true;
  }
  localStorage.clear()
  router.navigate(['login'])
  return false;

  
};



