
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VendorService } from 'src/app/services/vendor.service';
@Component({
  selector: 'app-warehouse-delete',
  templateUrl: './warehouse-delete.component.html',
  styleUrls: ['./warehouse-delete.component.css']
})
export class WarehouseDeleteComponent implements OnInit {

  submitted = false;
  vendorForm: FormGroup;
  data: any;
  wid = 0;
  messages: any;
  sucessMessage: any;

  constructor(
    public formBuilder: FormBuilder,
    public apiService: VendorService,
    private router: Router,
    private toastr: ToastrService

  ) { }

  //   private apiService: customerservice
  // ) { 
  //   this.mainForm();
  // }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params =>{ console.log(params.id)
    // this.wid = params.id;

    // this.apiService.getCustomerById(this.wid).subscribe((data: any=[]) =>{
    //   console.log(data.costCenterName);

    //   this. vendorForm = this.formBuilder.group({
    //     customerfName: [this.data.firstName  , Validators.required],
    //     customerlName: [this.data.lastName  , Validators.required],
    //     });
    // });
    // });

    // this.costCenterUpdateForm = this.formBuilder.group({
    //   costCenterName: ['', Validators.required],
    //   costCenterCode: ['', Validators.required],
    //   phoneNumber: ['', Validators.required],
    //   address: ['', Validators.required],
    //  });

    this.vendorForm = this.formBuilder.group({
      // customerId: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      company: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      fax: ['', [Validators.required]],
      displayNameAs: ['', [Validators.required]],
      gstRegistrationType: ['', [Validators.required]],
      notes: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      address: ['', [Validators.required]],
      //  description: ['', [Validators.required]],         
    })
  }



  get myForm() {
    return this.vendorForm.controls;
  }
  get f() { return this.vendorForm.controls; }

  onSubmit() {

    this.submitted = true;
    if (!this.vendorForm.valid) {
      return false;
    } else {
      console.log(this.vendorForm.value)

      // var data = {
      //   "firstName": this. vendorForm.value.firstName,
      //   "lastName": this. vendorForm.value.lastName,
      //   "email": this. vendorForm.value.email,
      //   "company": this. vendorForm.value.company,
      //   "phone": this. vendorForm.value.phone,
      //   "fax": this. vendorForm.value.fax,
      //   "displayNameAs": this. vendorForm.value.displayNameAs,
      //   "gstRegistrationType": this. vendorForm.value.gstRegistrationType,
      //   "notes": this. vendorForm.value.notes,
      //   "city": this. vendorForm.value.city,
      //   "state": this. vendorForm.value.state,
      //   "pincode": this. vendorForm.value.pincode,
      //   "address": this. vendorForm.value.address,        
      //  }


      this.apiService.vendorRegistration(this.vendorForm.value).subscribe((res) => {
        this.vendorForm.reset();
        this.submitted = false;
        this.sucessMessage = res;

        if (this.sucessMessage.statusCode == "406") {

          this.toastr.error(this.sucessMessage.message + "", '', {
            timeOut: 2000
          });
        } else {
          // this.router.navigate(['/vendorView']);
          // this.vendorForm.reset();
          this.submitted = false;
          this.toastr.success('Vendor Registered Successfully','',{
            timeOut: 2000
          });
        }
      }
        // console.log('successfully Registraion')

        , (error) => {
        this.router.navigate(['/vendorView']);
          console.log('Error')
        });
    }

  }

}
