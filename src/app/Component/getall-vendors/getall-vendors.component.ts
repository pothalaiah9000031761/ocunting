import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VendorService } from 'src/app/services/vendor.service';




@Component({
  selector: 'app-getall-vendors',
  templateUrl: './getall-vendors.component.html',
  styleUrls: ['./getall-vendors.component.css']
})
export class GetallVendorsComponent implements OnInit {
  vendorForm: FormGroup;
  Vendors: any = [];
  submitted = false;

  constructor(private apiService: VendorService,private formBuilder: FormBuilder) { 

  }
  creditlimitId;
  ngOnInit(): void {
    this.getallVendors();
    console.log(this.creditlimitId)

    this.vendorForm = this.formBuilder.group({
      creditlimitId: [this.creditlimitId, Validators.required],
      
      
    });
 
    
  } 
   customerArray: any=[]; 

  getallVendors() {
    this.apiService.getallVendors().subscribe(
      data => {
        this.Vendors= data; 
        this.customerArray= this.Vendors[0].sales;   
        console.log(this.Vendors);
        console.log(this.customerArray);
      },
      error => {

        alert('error');
      });
    
    }
    creditLimit:String;
    onSubmit() {
    
      this.submitted = true;
      if (!this.vendorForm.valid) {
        return false;
      } else {
       // console.log(this.vendorForm.value)
      this.creditlimitId= this.vendorForm.value.creditlimitId;

      this.apiService.getvendorbyId(this.creditlimitId).subscribe(
        data => {
           
          console.log(data)
          this.creditLimit=data['creditlimit'];
          console.log( this.creditLimit)
        },
        error => {
          if(error.status == 500){
            console.log(error.error.message)
          }else if(error.status == 400){
            console.log(error.error.message)
          }
          console.log(this.creditlimitId);
        });

    }
    }
    

}
