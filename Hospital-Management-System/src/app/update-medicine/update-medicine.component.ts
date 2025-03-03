import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';


@Component({
  selector: 'app-update-medicine',
  standalone: false,
  templateUrl: './update-medicine.component.html',
  styleUrl: './update-medicine.component.css'
})
export class UpdateMedicineComponent {

  medicine:Medicine=new Medicine();
  id:number=0;
  constructor(private route:ActivatedRoute,private medicineService:MedicineService,private roter:Router){}

   ngOnInit():void{
      
      this.id=this.route.snapshot.params['id'];
      this.medicineService.getMedicineById(this.id).subscribe(data=>{
       this.medicine=data;
      })
   }

   onSubmit(){

     this.medicineService.updateMedicine(this.id,this.medicine).subscribe(data=>{
       console.log(data);
       this.goToMedicineList();
     })
       
   }

   goToMedicineList(){

       this.roter.navigate(['view-medicine'])
   }
}
