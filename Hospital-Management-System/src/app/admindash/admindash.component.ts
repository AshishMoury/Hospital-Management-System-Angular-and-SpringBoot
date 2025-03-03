import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  standalone: false,
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {

  patients:Patient[]=[];
  constructor(private patientService:PatientService,private adminauthService:AdminauthService,private router:Router){}
  ngOnInit():void{
    this.getPatients();
  }

  getPatients(){
    this.patientService.getPatientList().subscribe(data=>{
      this.patients=data;
    })
  }

 delete(id:number){

  this.patientService.delete(id).subscribe(data=>{

    console.log(data);
    this.getPatients();
  })
 }
  
 logout(){

  this.adminauthService.logout();
  this.router.navigate(['home'])
    
 }
}
