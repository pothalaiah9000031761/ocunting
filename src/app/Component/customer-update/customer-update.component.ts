import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { customerservice } from '../../services/customerservice';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  submitted = false;
  updateCustomerForm: FormGroup;
  data: any;
  data1: any;
  sub: Subscription;
  id;
  messages: any;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    public apiService: customerservice

  ) {
    this.route.params.subscribe(params => this.id = params.id,
    );
    console.log(this.id)
  }


  ngOnInit() {
    this.apiService.getCustomerById(this.id).subscribe((data: any = []) => {
      console.log(data.customerInfo);

      this.updateCustomerForm = this.formBuilder.group({
        firstName: [data.customerInfo.firstName, Validators.required],
        lastName: [data.customerInfo.lastName, Validators.required],
        email: [data.customerInfo.email, Validators.required],
        company: [data.customerInfo.company, Validators.required],
        phone: [data.customerInfo.phone, Validators.required],
        fax: [data.customerInfo.fax, Validators.required],
        displayNameAs: [data.customerInfo.displayNameAs, Validators.required],
        gstRegistrationType: [data.customerInfo.gstRegistrationType, Validators.required],
        notes: [data.customerInfo.notes, Validators.required],
        city: [data.customerInfo.city, Validators.required],
        state: [data.customerInfo.state, Validators.required],
        pincode: [data.customerInfo.pincode, Validators.required],
        address: [data.customerInfo.address, Validators.required],
        taxInfoNo:[data.customerInfo.taxInfoNo, Validators.required],
        taxInfo:[data.customerInfo.taxInfo, Validators.required]
      });
    });


    // mainForm() {
    this.updateCustomerForm = this.formBuilder.group({
      // customerId: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      company: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      fax: ['', [Validators.required]],
      displayNameAs: ['', [Validators.required]],
      gstRegistrationType: ['', [Validators.required]],
      notes: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      address: ['', [Validators.required]],
      taxInfoNo: ['', [Validators.required]],
      taxInfo: ['', [Validators.required]],
      
    })
  }

  get myForm() {
    return this.updateCustomerForm.controls;
  }
  errorMessages;
  onSubmit() {

    this.submitted = true;

      var data = {
        "id": this.id,
        "firstName": this.updateCustomerForm.value.firstName,
        "lastName": this.updateCustomerForm.value.lastName,
        "email": this.updateCustomerForm.value.email,
        "company": this.updateCustomerForm.value.company,
        "phone": this.updateCustomerForm.value.phone,
        "fax": this.updateCustomerForm.value.fax,
        "displayNameAs": this.updateCustomerForm.value.displayNameAs,
        "gstRegistrationType": this.updateCustomerForm.value.gstRegistrationType,
        "notes": this.updateCustomerForm.value.notes,
        "city": this.updateCustomerForm.value.city,
        "state": this.updateCustomerForm.value.state,
        "pincode": this.updateCustomerForm.value.pincode,
        "address": this.updateCustomerForm.value.address,
        "taxInfoNo":this.updateCustomerForm.value.taxInfoNo,
        "taxInfo":this.updateCustomerForm.value.taxInfo,
      }
      this.apiService.updateCustomer(data).subscribe(
        (data)=>{
      console.log(data)
          if (data['statusCode'] == 412) {
            console.log("Customer add Failed")
            this.errorMessages = data['errorMessages'];
            console.log(this.errorMessages)
            for (let i = 0; i < this.errorMessages.length; i++) {
              this.toastr.error(this.errorMessages[i]);
            }
  
          }else if(data['statusCode'] == 403){
            this.errorMessages = data['message'];
            this.toastr.error(this.errorMessages);
          } else {
  
            this.toastr.success('Customer details updated successfully!');
            this.ngOnInit();
            this.router.navigate(['/customer-view']);
          }

        },(error)=>{
          console.log(error)
        },()=>{

        }
        
      );
    
  }

  cancel() {
    this.router.navigate(['/customer-view']);
  }

}
