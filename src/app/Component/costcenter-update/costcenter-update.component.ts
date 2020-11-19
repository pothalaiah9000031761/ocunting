import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { observable, Subscription } from 'rxjs';
import { costcentermodel } from 'src/app/model/costcentermodel';
import { costcenterservice } from '../../services/costcenterservice';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-costcenter-update',
  templateUrl: './costcenter-update.component.html',
  styleUrls: ['./costcenter-update.component.css']
})
export class CostcenterUpdateComponent implements OnInit {

  costCenterUpdateForm: FormGroup;
  submitted = false;
  // updatedWarehouse: any;
  data: any;
  sub: Subscription;
  wid=0;
  messages: any;
  constructor(private formBuilder: FormBuilder, 
              private apiService: costcenterservice, 
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private router: Router,
              ) 
              {    
                  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{ console.log(params.id)
    this.wid = params.id;

    this.apiService.getCostCenterById(this.wid).subscribe((data: any=[]) =>{
      console.log(data.costCenterName);
  
      this.costCenterUpdateForm = this.formBuilder.group({
        costCenterName: [data.cost.costCenterName, Validators.required],
        costCenterCode: [data.cost.costCenterCode, Validators.required],
        phoneNumber: [data.cost.phoneNumber, Validators.required],
        address: [data.cost.address, Validators.required],
        });
    });
    });
    
    this.costCenterUpdateForm = this.formBuilder.group({
      costCenterName: ['', Validators.required],
      costCenterCode: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
     });
    
  }

  get myForm() { 
    return this.costCenterUpdateForm.controls; 
  }

  onSubmit() {
    this.submitted = true;


    if (!this.costCenterUpdateForm.valid) {
      return false;
    } else {
      console.log(this.costCenterUpdateForm.value)

      var data = {
          "id": this.wid,
          "costCenterName": this.costCenterUpdateForm.value.costCenterName,
          "costCenterCode": this.costCenterUpdateForm.value.costCenterCode,
          "phoneNumber": this.costCenterUpdateForm.value.phoneNumber,
          "address": this.costCenterUpdateForm.value.address,
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
      this.apiService.updateCostCenter(this.wid,data).subscribe(
        data => {
          console.log(data)
          // alert('Cost Center details successfully updated!');
          this.toastr.success('Cost Center details updated successfully!');
          this.router.navigate(["/costCenterView"]);
        },
        error => {
          console.log(data)
        });
  }
  
  }

  cancel() {
    this.router.navigate(['/costCenterView']);
  }


}
