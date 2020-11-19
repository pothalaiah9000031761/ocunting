import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/services/register.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  trimCtrl: FormControl;
  p: Number = 1;
  count: Number = 5;
  constructor(private formBuilder: FormBuilder, private apiService: RegisterService,private toastr: ToastrService,private route: ActivatedRoute,private router: Router) { }
  
  
  
  ngOnInit(): void {
  let numericRegex = /^[a-zA-Z0-9]+$/;
  this.registerForm = this.formBuilder.group({
  
  warehouseName: ['', [Validators.required,  Validators.minLength(6),Validators.maxLength(20),]],
  houseNo: ['', [Validators.required,  Validators.minLength(3),Validators.maxLength(20)]],
  addressLine1: ['', [Validators.required,  Validators.minLength(6),Validators.maxLength(20)]],
  addressLine2: ['', [Validators.required,  Validators.minLength(6),Validators.maxLength(20)]],
  country: ['', Validators.required],
  state: ['', Validators.required],
  city: ['', Validators.required],
  landMark: ['', [Validators.required,  Validators.minLength(6),Validators.maxLength(20)]],
  zipCode: ['', [Validators.required, Validators.minLength(3),,Validators.maxLength(10),Validators.pattern("^[0-9]*$")]]
  
  
  });
  
  // this.registerForm.get('country').patchValue('0');
  // this.registerForm.get('state').patchValue('0');
  // this.registerForm.get('city').patchValue('0');
  
  
  
  
  
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

  this.apiService.registarion(data).subscribe(
  
  (res) => {
    console.log(res)
    if(res['statusCode'] == 208){
      this.toastr.error(res['statusMessage']);
    }else{
      this.toastr.success('Registered Sucessfully');
      this.router.navigate(['/warehouselist']);
    }

  
  }, (error) => {
    // this.toastr.error('Warehouse Name already exists');
  // console.log('Warehouse Name already exists')
  
  });
  }
  }
  public noWhitespace(control: FormControl) {
    let isWhitespace = (control.value || '').trim().length === 0;
    let isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true }
}
  

}