import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-warehouse-update',
  templateUrl: './warehouse-update.component.html',
  styleUrls: ['./warehouse-update.component.css']
})
export class WarehouseUpdateComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  // updatedWarehouse: any;
  data: any;
  sub: Subscription;
  wid=0;
  messages: any;
  constructor(private formBuilder: FormBuilder, 
    private apiService: RegisterService, 
    private route: ActivatedRoute ,
    private router: Router ,  
    private toastr: ToastrService,) { 
   

    
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{ console.log(params.id)
    this.wid=params.id;

    this.apiService.getWarehousebyId(this.wid).subscribe((data1: any=[]) =>{
      console.log(data1.warehouseName);
  
      // this.data = data1
      this.registerForm = this.formBuilder.group({
        warehouseName: [data1.warehouseName, Validators.required],
        // warehouseCode: [data1.warehouseCode, Validators.required],       
    
        houseNo: [data1.address.houseNo, Validators.required],
        addressLine1: [data1.address.addressLine1, Validators.required],
        addressLine2: [data1.address.addressLine2, Validators.required],
        country: [data1.address.country, Validators.required],
        state: [data1.address.state, Validators.required],
        city: [data1.address.city, Validators.required],
        landMark: [data1.address.landMark, Validators.required],
        zipCode: [data1.address.zipCode, Validators.required],
        
      });
    });
    });
    
    this.registerForm = this.formBuilder.group({
      warehouseName: ['', Validators.required],
      houseNo: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      landMark: ['', Validators.required],
      zipCode: ['', Validators.required],
    });
    

    // this.sub = this.route.data.subscribe(v => console.log(v));
    //  console.log(this.sub)
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;


    if (!this.registerForm.valid) {
      return false;
    } else {
      console.log(this.registerForm.value)

      var data = {
        "warehouseName": this.registerForm.value.warehouseName,
        address: {
          "houseNo": this.registerForm.value.houseNo,
          "addressLine1": this.registerForm.value.addressLine1,
          "addressLine2": this.registerForm.value.addressLine2,
          "country": this.registerForm.value.country,
          "state": this.registerForm.value.state,
          "city": this.registerForm.value.city,
          "landMark": this.registerForm.value.landMark,
          "zipCode": this.registerForm.value.zipCode
        }
      }
      // this.updatedWarehouse.registarion(this.registerForm.value)
      //   .subscribe(
      //     data => {
      //       console.log('successfully Updated')

      //     },
      //     error => {
      //       console.log('error')
      //     });
      // }
      this.apiService.updatedWarehouse(this.wid,data).subscribe(
        data => {
          console.log(data);
          if(data['statusCode'] == 208){
            this.toastr.error(data['statusMessage']);
          }else{
            this.toastr.success('Registered Sucessfully');
            this.router.navigate(['/warehouselist']);
          }
      
          // this.toastr.success('Sucessfully Warehouse Updated ');
          // this.router.navigate(['/warehouselist']);


        },
        error => {
          // this.toastr.error('Warehouse Name already exist');
        });
  }
  // ngOnDestroy() {
  //   this.sub.unsubscribe()
  // }

  
  }


}


