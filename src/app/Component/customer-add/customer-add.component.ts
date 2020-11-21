import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { customerservice } from '../../services/customerservice';
import { ToastrService } from 'ngx-toastr';
import { NgZone } from '@angular/core';
@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  submitted = false;
  addCustomerForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private toastr: ToastrService,
    private apiService: customerservice
  ) {

  }

  ngOnInit(): void {
    this.addCustomerForm = this.fb.group({
      // customerId: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      // middleName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      company: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      fax: ['', [Validators.required]],
      displayNameAs: ['', [Validators.required]],
      gstRegistrationType: ['', [Validators.required]],
      taxInfo: ['', [Validators.required]],
      taxInfoNo: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      notes: ['', [Validators.required]],
      files: ['', [Validators.required]]
      // description: ['', [Validators.required]],
    })
  }

  // get myForm(){
  //   return this.addCustomerForm.controls;
  // }
  errorMessages: any = [];
  get f() { return this.addCustomerForm.controls; }

  onSubmit() {
    console.log("called")
    this.submitted = true;
    
    // if (!this.addCustomerForm.valid) {
    //   console.log(this.addCustomerForm.valid)
    //   return false;
    // } else {
    console.log(this.addCustomerForm.value)
    this.apiService.addCustomer(this.addCustomerForm.value).subscribe(
      (res) => {
        console.log(res);
        if (res['statusCode'] == 412) {
          console.log("Customer add Failed")
          this.errorMessages = res['errorMessages'];
          console.log(this.errorMessages)
          for (let i = 0; i < this.errorMessages.length; i++) {
            this.toastr.error(this.errorMessages[i]);
          }

        } else if (res['statusCode'] == 403) {
          this.errorMessages = res['message'];
          this.toastr.error(this.errorMessages);
        } else {

          console.log('Customer details successfully added!');
          this.toastr.success('Customer details successfully added!');
          this.router.navigate(['/customer-view']);
        }

        //   this.addCustomerForm.reset();
        this.submitted = false;
      }, (error) => {
        console.log(error);
      });
    //   }
  }
  selectFile;
  upload(data) {
    console.log(data);
    this.selectFile = data;
    console.log("this.selectFile:::::" + this.selectFile);
    for (let i = 0; i < this.selectFile.length; i++) {
      console.log(this.selectFile[i])
    }
  }

}
