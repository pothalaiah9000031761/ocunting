import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { productmasterservice } from 'src/app/services/productmasterservice';

@Component({
  selector: 'app-productmaster-add',
  templateUrl: './productmaster-add.component.html',
  styleUrls: ['./productmaster-add.component.css']
})
export class ProductmasterAddComponent implements OnInit {

  productMasterForm: FormGroup;
  submitted = false;
 
  data: any;
  sub: Subscription;
  wid = 0;
  messages: any;
  today: Date;
  minDate: Date;
  maxDate: Date;
  
    constructor(
      // private formBuilder: FormBuilder,
      public fb: FormBuilder,
      private router: Router,
      private ngZone: NgZone,
      private apiService: productmasterservice,
      private toastr: ToastrService) {
      // this.today = new Date();
      // this.maxDate = new Date(this.today.getFullYear(), this.today.getMonth(),6);
      this.mainForm();
      }
        
    ngOnInit(): void {
    }
  
    mainForm() {
      this.productMasterForm = this.fb.group({
        // productId:  ['', [Validators.required]],
        productName:  ['', [Validators.required]],
        description:   ['', [Validators.required]],
        hsnCode:  ['', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(10)]],
        taxRates:  ['', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(10)]],
        sellingPrice:  ['', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(10)]],
        buyingPrice:  ['', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(10)]],
        dateOfSelling: ['', [Validators.required]],
        dateOfBuying: ['', [Validators.required]],
        costCenters:  ['', [Validators.required]],
        productDescription:  ['', [Validators.required]]

        })
    }
  
    get myForm(){
      return this.productMasterForm.controls;
    }
  
    onSubmit() {
      this.submitted = true;
      if (!this.productMasterForm.valid) {
        return false;
      } else {
        this.apiService.addProductMaster(this.productMasterForm.value).subscribe(
          (res) => {
            console.log('productmaster details successfully saved!'); 
            //  alert('productmaster details details successfully saved!');
            // this.productMasterForm.reset();
            this.toastr.success('Product Master Successfully Added');
            this.productMasterForm.reset();
            this.submitted = false;
          }, (error) => {
            console.log(error);
          });
      }
    }


}
