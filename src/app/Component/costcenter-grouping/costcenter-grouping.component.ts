import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { stringify } from 'querystring';
import { costcenterservice } from '../../services/costcenterservice';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router"
import { $ } from "jquery"
;
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-costcenter-grouping',
  templateUrl: './costcenter-grouping.component.html',
  styleUrls: ['./costcenter-grouping.component.css']
})
export class CostcenterGroupingComponent implements OnInit {

  form: FormGroup;
  CostCenters: any = [];
  costcenternames: any;
  createCostCenterGroup: any;
  createCostCenterName: any
  costCenterGroupNames: any;
  costCenterGroupArr1: any = []
  jsonObj = {};
  costCenterJson1: any = {}
  closeResult: string;
  
  p: Number = 1;
  count: Number = 5;

  get selectedCostCenterArray() {
    return this.form.controls.costCenterNew as FormArray;
  }
  constructor(
    private router:Router,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private apiService: costcenterservice) {
    this.form = this.formBuilder.group({
      costCenterNew: new FormArray([])
    });
  }


  checkboxesDataList: any = []
  getCostCenterDetails() {
    this.apiService.getCostCenterDetails().subscribe(
      data => {
        //this.CostCenters = data;
        this.checkboxesDataList = data['cost'];
        this.addCheckboxes();
        console.log(this.checkboxesDataList);
      },
      error => {

        alert('error');
      });
  }

  
  private addCheckboxes() {
    this.checkboxesDataList.forEach(() => this.selectedCostCenterArray.push(new FormControl(false)));
  }

  ngOnInit() {
    this.getCostCenterDetails();

  }
  
  selectedCostCenters: any = [];
  submitForm() {
    this.selectedCostCenters = this.form.value.costCenterNew
      .map((checked, i) => checked ? this.checkboxesDataList[i] : null)
      .filter(v => v !== null);
    console.log(this.selectedCostCenters);

  }


  mainForm() {
    this.form = this.formBuilder.group({
      // customerId: ['', [Validators.required]],
      createCostCenterGroup: ['', [Validators.required]],
    })


  }

  get myForm() {
    return this.form.controls;

  }






  createWGroup(costCenterName) {
   
    console.log(this.costcenternames)
    var data = {
      costGroupName: costCenterName,
      CostCenters: this.selectedCostCenters
    }
    console.log(data)
    return this.apiService.createCostCenterGroup(data).subscribe((posResp) => {
      this.createCostCenterGroup = posResp
      console.log(this.createCostCenterGroup)
      document.getElementById('myModal').click();
      this.toastr.success('CostCenter Group created successfully');
      this.router.navigate([`/costCenterGroupingView`])
     // this.costCenterGroupArr1 = []
     //this.selectedCostCenters=[]
     // this.getCostCenterDetails();

     // $("#createCostCenterGroup").val("");

    }, (errResponse) => {
      console.log(errResponse)
    })
  }
 

  deletewarehouse(id) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteCostCenter(id).subscribe((data) => {
        console.log(data);
        console.log(this.CostCenters)
        this.getCostCenterDetails()

        console.log(this.CostCenters)

      }
      )
    }
  }

}