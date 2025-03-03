import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }
  authenticate(username2:string,password2:string){

    if(username2=='ash'&&password2=='ash'){

        sessionStorage.setItem('username2',username2);
        return true
    }
    else{
     return false
    }
}


isUserLoggedIn(){

   console.log("user login ho gaya hai")
  let user= sessionStorage.getItem('username2');

  return !(user==null)

}

logout(){

   console.log("logout user ho gaya")
    sessionStorage.removeItem('username2');
}
}
