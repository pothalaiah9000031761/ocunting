import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import $ from "jquery";

@Component({
  selector: 'app-warehouse-grouping',
  templateUrl: './warehouse-grouping.component.html',
  styleUrls: ['./warehouse-grouping.component.css']
})
export class WarehouseGroupingComponent implements OnInit {

  form: FormGroup;
  modalForm: FormGroup;
  Warehouses: any = [];
  warehousenames: any;
  createWareHouseGroup: any;
  createWareHouseName: any
  warehouseGroupNames: any;
  wareHouseCheckedArr: any = []
  AllWarehouseGroupData: any = [];
  p: Number = 1;
  count: Number = 5;


  constructor(private apiService: RegisterService,
    private fb: FormBuilder,
    private modalfb: FormBuilder,
    private router: Router,
    private toastr: ToastrService) {

    this.form = this.fb.group({
      checkArray: this.fb.array([])
    })

  }

  mainForm() {
    this.form = this.fb.group({
      // customerId: ['', [Validators.required]],
      createWareHouseGroup: ['', [Validators.required]],

    })
  }

  get myForm() {
    return this.form.controls;

  }
  ngOnInit(): void {
    this.getallWarehouse();
    $("#save").prop('disabled', true);
    $("#createWareHouseGroup").keypress(function () {
      var txtV = ($("#createWareHouseGroup").val().trim())


      if (txtV == "") {
        //alert("please neter")
        $("#save").prop('disabled', true);
      }
      else {

        $("#save").prop('disabled', false);
      }

    });



    //$("#save").prop('disabled', true);  


    this.apiService.listAllWarehouseGroups().subscribe((data) => {

      this.AllWarehouseGroupData = data;
      console.log(this.AllWarehouseGroupData)

    }, (errResp) => { console.log(errResp) })



  }


  //group WareHouse Checkbox data






  onCheckboxChange(e) {
    // console.log(e)
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
      //  console.log(e.target.value)
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    //this.warehousenames=[checkArray.value]
    this.warehousenames = checkArray.value
    this.wareHouseCheckedArr = this.warehousenames;
    console.log(this.wareHouseCheckedArr)
    this.warehouseGroupNames = this.warehousenames;

    console.log(this.warehousenames)

  }




  submitForm() {
    console.log(this.form.value);
   





  }




  createWGroup(createWareHouseName) {

    //  console.log($("#createWareHouseGroup").val())
    var txtW = ($("#createWareHouseGroup").val().trim())
    let count = 0
    let ins = this.AllWarehouseGroupData.findIndex((e, i) => {
      // return e.warehouseGroupName===createWareHouseName;
      if (e.warehouseGroupName === txtW) {
        this.toastr.error("Anna vere name pettu already undi")
        count++
      }
      else {
        return count;
      }
    })
    var data = {

      warehouseGroupName: createWareHouseName,
      groupOfWarehouses: this.warehouseGroupNames
    }

    console.log(data)


    //  console.log(createWareHouseName);
    //  console.log(this.warehousenames)
    // var jsondata= JSON.stringify(data)
    // console.log(jsondata)
    if (count == 0) {
      return this.apiService.createWarehouseGroup(data).subscribe((posResp) => {
        this.createWareHouseGroup = posResp
        console.log(this.createWareHouseGroup)
        // alert("WareHouse Group created successfully");

        document.getElementById('myModal').click();
        this.toastr.success("Ware House Group Created Succesfully")
        this.router.navigate(['/WHouseGroupListView'])


        this.warehousenames = []
        this.getallWarehouse()
        // document.getElementById('createWareHouseGroup').nodeValue=""
        // this.createWareHouseName="";
      }, (errResponse) => {
        //console.log(errResponse)
        this.toastr.error("Please enter warehouse group name")
      })
    }
  }

  getallWarehouse() {
    this.apiService.getallWarehouse().subscribe(
      data => {
        this.Warehouses = data;
        console.log(this.Warehouses);
      },
      error => {

        alert('error');
      });
  }
  deletewarehouseGroup(id) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteWarehouseGroupById(id).subscribe((data) => {
        console.log(data);
        console.log(this.Warehouses)
        this.getallWarehouse()

        console.log(this.Warehouses)

      }
      )

    }
  }
}