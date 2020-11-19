import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { productmasterservice } from 'src/app/services/productmasterservice';

@Component({
  selector: 'app-productmaster-update',
  templateUrl: './productmaster-update.component.html',
  styleUrls: ['./productmaster-update.component.css']
})
export class ProductmasterUpdateComponent implements OnInit {

  productMasterUpdateForm: FormGroup;
  submitted = false;
  
  data: any;
  sub: Subscription;
  wid = 0;
  messages: any;
  today: Date;
  minDate: Date;
  maxDate: Date;

  constructor(private formBuilder: FormBuilder,
    private apiService: productmasterservice,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute) {
   

  }

  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params.id)
      this.wid = params.id;

      this.apiService.getProductMasterById(this.wid).subscribe((data: any = []) => {
        console.log(data.productMasterProduct.productName);

        this.productMasterUpdateForm = this.formBuilder.group({
          productName: [data.productMasterProduct.productName, Validators.required],
          description: [data.productMasterProduct.description, Validators.required],
          hsnCode: [data.productMasterProduct.hsnCode, Validators.required],
          taxRates: [data.productMasterProduct.taxRates, Validators.required],
          sellingPrice: [data.productMasterProduct.sellingPrice, Validators.required],
          buyingPrice: [data.productMasterProduct.buyingPrice, Validators.required],
          dateOfSelling: [data.productMasterProduct.dateOfSelling, Validators.required],
          dateOfBuying: [data.productMasterProduct.dateOfBuying, Validators.required],
          costCenters: [data.productMasterProduct.costCenters, Validators.required],
          productDescription: [data.productMasterProduct.productDescription, Validators.required],
        });
      });
    });

    this.productMasterUpdateForm = this.formBuilder.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      hsnCode: ['', Validators.required],
      taxRates: ['', Validators.required],
      sellingPrice: ['', Validators.required],
      buyingPrice: ['', Validators.required],
      dateOfSelling: ['', Validators.required],
      dateOfBuying: ['', Validators.required],
      costCenters: ['', Validators.required],
      productDescription: ['', Validators.required],
    });
  }

  get myForm() {
    return this.productMasterUpdateForm.controls;
  }

  onSubmit() {
    this.submitted = true;


    if (!this.productMasterUpdateForm.valid) {
      return false;
    } else {
      console.log(this.productMasterUpdateForm.value)

      var data = {
        "productId": this.wid,
        "productName": this.productMasterUpdateForm.value.productName,
        "description": this.productMasterUpdateForm.value.description,
        "hsnCode": this.productMasterUpdateForm.value.hsnCode,
        "taxRates": this.productMasterUpdateForm.value.taxRates,
        "sellingPrice": this.productMasterUpdateForm.value.sellingPrice,
        "buyingPrice": this.productMasterUpdateForm.value.buyingPrice,
        "dateOfSelling": this.productMasterUpdateForm.value.dateOfSelling,
        "dateOfBuying": this.productMasterUpdateForm.value.dateOfBuying,
        "costCenters": this.productMasterUpdateForm.value.costCenters,
        "productDescription": this.productMasterUpdateForm.value.productDescription,
      }
      console.log(this.wid)
      this.apiService.updateProductMaster(data).subscribe(
        data => {
          
          this.toastr.success('productmaster details updated successfully!');
          this.router.navigate(["/productmaster-view"]);    
        },
        error => {
          this.toastr.error('Something wrong')
        });
    }

  }

  cancel() {
    this.router.navigate(['/productmaster-view']);
  }

}
