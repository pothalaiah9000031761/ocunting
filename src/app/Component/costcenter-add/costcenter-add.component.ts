import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { costcenterservice } from '../../services/costcenterservice';

@Component({
  selector: 'app-costcenter-add',
  templateUrl: './costcenter-add.component.html',
  styleUrls: ['./costcenter-add.component.css']
})
export class CostcenterAddComponent implements OnInit {

  submitted = false;
  costCenterForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private toastr: ToastrService,
    private apiService: costcenterservice
  ) { 
    this.mainForm();
  }

  ngOnInit(): void {
  }

  mainForm() {
    this.costCenterForm = this.fb.group({
      costCenterName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(25)]],
      costCenterCode: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(25)]],
      phoneNumber: ['', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
      address: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(25)]],
     
      })
  }

  get myForm(){
    return this.costCenterForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.costCenterForm.valid) {
      return false;
    } else {
      this.apiService.addCostCenter(this.costCenterForm.value).subscribe(
        (res) => {
          // console.log('Cost Center Added Successfully!');
          this.toastr.success('Cost Center Added Successfully');
          this.costCenterForm.reset();
          this.submitted = false;
        }, (error) => {
          console.log(error);``
        });
    }
  }

}
