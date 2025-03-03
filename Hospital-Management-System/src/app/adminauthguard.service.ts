import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminauthService } from './adminauth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthguardService  implements CanActivate{

  constructor(private adminAuthService:AdminauthService,private router:Router) { }

     canActivate() {
       
         if(this.adminAuthService.isUserLoggedIn()){

             return true;
         }
         else{
             this.router.navigate(['adlogin'])
             return false;
         }
           
     }
    }