import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VendorService } from 'src/app/services/vendor.service';
@Component({
  selector: 'app-vendor-update',
  templateUrl: './vendor-update.component.html',
  styleUrls: ['./vendor-update.component.css']
})
export class VendorUpdateComponent implements OnInit {
  submitted = false;
  vendorForm: FormGroup;
  data: any;
  wid = 0;
  messages: any;
  sucessMessage: any;

  constructor(
    public formBuilder: FormBuilder,
    public apiService: VendorService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router


  ) { }

  //   private apiService: customerservice
  // ) { 
  //   this.mainForm();
  // }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params.id)
      this.wid = params.id;

      this.apiService.getvenodrbyId(this.wid).subscribe((data: any = []) => {
        //console.log(data.firstName);

        this.vendorForm = this.formBuilder.group({
          firstName: [data.vendor.firstName, Validators.required],
          lastName: [data.vendor.lastName, Validators.required],
          email: [data.vendor.email, Validators.required],
          company: [data.vendor.company, Validators.required],
          phone: [data.vendor.phone, Validators.required],
          fax: [data.vendor.fax, Validators.required],
          displayNameAs: [data.vendor.displayNameAs, Validators.required],
          gstRegistrationType: [data.vendor.gstRegistrationType, Validators.required],
          notes: [data.vendor.notes, Validators.required],
          city: [data.vendor.city, Validators.required],
          state: [data.vendor.state, Validators.required],
          pincode: [data.vendor.pincode, Validators.required],
          address: [data.vendor.address, Validators.required],
        });
      });
    });


    this.vendorForm = this.formBuilder.group({
      // customerId: ['', [Validators.required]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required]],
      company: ['', Validators.required],
      phone: ['', Validators.required],
      fax: ['', Validators.required],
      displayNameAs: ['', Validators.required],
      gstRegistrationType: ['', Validators.required],
      notes: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      address: ['', Validators.required],
      //  description: ['', [Validators.required]],         
    })
  }



  get myForm() {
    return this.vendorForm.controls;
  }

  message;
  onSubmit() {

    this.submitted = true;
    if (!this.vendorForm.valid) {
      return false;
    } else {
      //console.log(this.vendorForm.value)

      var data = {
        "id": this.wid,
        "firstName": this.vendorForm.value.firstName,
        "lastName": this.vendorForm.value.lastName,
        "email": this.vendorForm.value.email,
        "company": this.vendorForm.value.company,
        "phone": this.vendorForm.value.phone,
        "fax": this.vendorForm.value.fax,
        "displayNameAs": this.vendorForm.value.displayNameAs,
        "gstRegistrationType": this.vendorForm.value.gstRegistrationType,
        "notes": this.vendorForm.value.notes,
        "city": this.vendorForm.value.city,
        "state": this.vendorForm.value.state,
        "pincode": this.vendorForm.value.pincode,
        "address": this.vendorForm.value.address,
      }


      this.apiService.updatecustVendor(data).subscribe((data) => {
      //  this.toastr.success('Sucessfully   Vendor  Updated');
      
        // console.log(data)
        // console.log(data['message']);
        this.sucessMessage = data;

        if (this.sucessMessage.statusCode == "412") {

         
        } 
        
        else {
          // this.router.navigate(['/vendorView']);
          // this.vendorForm.reset();
          this.submitted = false;
          this.toastr.success('Sucessfully   Vendor  Updated','',{
            timeOut: 2000
          });
          this.router.navigate(['/vendorView'])
        }



        if (this.sucessMessage.statusCode == "200") {
          this.router.navigate(['/vendorView']);
          this.toastr.success(this.sucessMessage.message + "", '', {
            timeOut: 2000
          });
          console.log(this.message)
        } 
        else if (data['statusCode'] == '412') {
          
          this.toastr.error(this.sucessMessage.message + "", '', {
            timeOut: 2000
          });
         
        }
        
      },
        error => {
         
        },()=>{

        });
    }

  }

  cancel() {

    this.router.navigate(['/vendorView']);
  }



}
