import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../../login.service';

export const normalUsersGuard: CanActivateFn = (route, state) => {
  const loginService:LoginService = inject(LoginService);
  const router:Router = inject(Router);

  if(loginService.isLoggedIn() && loginService.getUserRole() == "NORMAL"){
    return true;
  }
  localStorage.clear()
  router.navigate(['login'])
  return false;

};
