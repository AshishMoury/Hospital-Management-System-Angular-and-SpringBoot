import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  standalone: false,
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

  appointments:Appointment[]=[];
  constructor(private appointmentService:AppointmentService){}

  ngOnInit():void{

    this.getAppointments();
  }
  getAppointments(){
    this.appointmentService.getAllAppointmets().subscribe(data=>{
        this.appointments=data;
    })
  }

  //after deletion redirect to same page
  delete(id:number){

    this.appointmentService.deleteAppointment(id).subscribe(data=>{
      console.log(data);
      this.getAppointments();
    })
  }
}
