import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

    authenticate(username:string,password:string){
        
      if(username=="ash"&&password=="ash111"){

        sessionStorage.setItem('username',username);
        return true;
      }else{
        return false;
      }
    }

    isUserLoggedIn(){
  
      console.log("doctor login ho gaye")
      let user=sessionStorage.getItem('username');
      console.log(user)
      return !(user==null)

    }

    logout(){

      console.log("doctor logout ho gaye")

      sessionStorage.removeItem('username');
    }
}
