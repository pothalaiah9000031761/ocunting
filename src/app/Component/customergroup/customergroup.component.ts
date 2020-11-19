import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl
} from '@angular/forms';
import { stringify } from 'querystring';
import { Router } from '@angular/router';
import Swal from'sweetalert2';

import { CustomergroupService } from '../../services/customergroup.service';
import { CustomerGroup } from '../CustomerGroup';
//import { trimValidator } from "../customergroup/trimvalidate";
@Component({
  selector: 'app-customergroup',
  templateUrl: './customergroup.component.html',
  styleUrls: ['./customergroup.component.css']
})
export class CustomergroupComponent implements OnInit {
  form: FormGroup;
  customerGroupForm: FormGroup;
  submitted = false;
  customerGroupModel: CustomerGroup = new CustomerGroup();
  get selectedCustomersArray() {
    return this.form.controls.customers as FormArray;
  }
  constructor(private formBuilder: FormBuilder, private service: CustomergroupService,private router: Router) {
    this.form = this.formBuilder.group({
      customers: new FormArray([])

    });
  }

  // checkboxesDataList:any = [
  //   {
  //     id: 'C001',
  //     "firstName": "surya",
  //     "lastName": "gosala"
  //   },
  //   {
  //     id: 'C001',
  //     "firstName": "surya narayana",
  //     "lastName": "S"

  //   },
  //   {
  //     id: 'C001',
  //     "firstName": "venkat",
  //     "lastName": "G"

  //   },
  //   {
  //     id: 'C001',
  //     "firstName": "ravi",
  //     "lastName": "gosala"

  //   }
  //  ]

  checkboxesDataList: any = []

  getAllCustomersData() {
    this.service.getallCustomersData().subscribe(
      (data) => {
        this.checkboxesDataList = data;
        this.addCheckboxes();
        // this.router.navigate(['/customergroupingview'])
        console.log(this.checkboxesDataList)
      }, (error) => {
        if (error.status == 400) {
          //this.service.errorAlert(error.error.message);

        } else if (error.status == 500) {
          // this.service.errorAlert(error.error.message);
        }
      }
    );
  }

  private addCheckboxes() {
    this.checkboxesDataList.forEach(() => this.selectedCustomersArray.push(new FormControl(false)));
  }

  ngOnInit() {
    this.getAllCustomersData();

  }


  selectedCustomers: any = [];
  submit() {

    this.selectedCustomers = this.form.value.customers
      .map((checked, i) => checked ? this.checkboxesDataList[i] : null)
      .filter(v => v !== null);
    console.log(this.selectedCustomers);
  }

  massage:{};
  validationMessage:String;
  customerGroup(data) {
    console.log(data)
    this.customerGroupModel.groupId=0;
    this.customerGroupModel.groupName=data.groupName;
    this.customerGroupModel.customers=this.selectedCustomers;
   
    console.log(this.customerGroupModel)
    
    this.service.createCustomerGroup(this.customerGroupModel).subscribe(
      (data)=>{
        console.log(data)
        this.massage=data;
        if(data['true']){
         this.validationMessage="Group Created Successfully";
         document.getElementById('customergroup').click();
         this.router.navigate(['customergroupingview']);
          Swal.fire("Customer Group Created Successfully");
        }else{
          this.validationMessage="Group already exists.Try with another one";
        }
       
     //   this.service.successAlert(this.massage);
      },(error)=>{
        if(error.status == 400){
          
          this.validationMessage=error.error.message;
        }else if(error.status == 500){
          this.validationMessage=error.error.message;
        }
      },()=>{
        
      }
    );
  }

}
