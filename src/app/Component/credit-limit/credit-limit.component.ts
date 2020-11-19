import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VendorService } from 'src/app/services/vendor.service';
import { ToastrService } from 'ngx-toastr'
import $ from 'jquery';

@Component({
  selector: 'app-credit-limit',
  templateUrl: './credit-limit.component.html',
  styleUrls: ['./credit-limit.component.css']
})
export class CreditLimitComponent implements OnInit {

  vendorForm: FormGroup;
  Vendors: any = [];
  testData:any={}
  submitted = false;
  creditupdateform: FormGroup;
  creditupdatedaysform: FormGroup;

  constructor(private apiService: VendorService, private formBuilder: FormBuilder,private toastr: ToastrService) {

  }
  creditlimitId;
  customerId;
  creditamount;
  salesId;
  creditDays;
  ngOnInit(): void {
    this.getallVendors();
    // console.log(this.creditlimitId)

    this.vendorForm = this.formBuilder.group({
      creditlimitId: [this.creditlimitId, Validators.required],


    });

    this.creditupdateform = this.formBuilder.group({
      customerId: [this.customerId, Validators.required],
      creditamount: [this.creditamount, Validators.required],

    });
    this.creditupdatedaysform = this.formBuilder.group({
      salesId: [this.salesId, Validators.required],
      creditDays: [this.creditDays, Validators.required],

    });

  }


  customerArray: any = [];
  salesArray: any = [];
  finalArray: any = [];
  getallVendors() {
    this.apiService.getallVendors().subscribe(
      data => {
        // this.customerArray = data;
        this.Vendors = data;
        //console.log(this.Vendors.sales)
        console.log(this.Vendors);
        console.log(this.Vendors[0]);
        // this.salesArray=this.Vendors.length;
        // this.salesArray=this.Vendors.sales;
        // console.log(this.salesArray)
        for (let i = 0; i < this.Vendors.length; i++) {
          //  this.salesArray=this.Vendors[i].sales;
          //   console.log(this.Vendors[i].sales)
          this.salesArray.push(this.Vendors[i].sales);
        }
      
        console.log(this.salesArray)
      },
      error => {

        alert('error');
      });

  }
  creditLimit: String;
  onSubmit() {
    this.submitted = true;
    
    if (!this.vendorForm.valid) {
      return false;
    } else {
      // console.log(this.vendorForm.value)
      this.creditlimitId = this.vendorForm.value.creditlimitId;

      this.apiService.getvendorbyId(this.creditlimitId).subscribe(
        data => {

          console.log(data)
          this.creditLimit = data['creditLimit'];
          console.log(this.creditLimit)
         // document.getElementyId("exampleModal").click();
        // $("#exampleModal").val("");
         
        },
        error => {
          if (error.status == 500) {
            console.log(error.error.message)
          } else if (error.status == 400) {
            console.log("sfsgf")
            console.log(error.message)
          }else{
            console.log("classed")
          }
          console.log(this.creditlimitId);
        });

    }

  }

  closeX(){
    $("#creditlimitId").val("");
    //$("#creditlimit").val("");
    $("#CreditA").val();
  }


  moreDetails(id){

    this.testData=id;
    console.log(this.testData); 


  }

  onSubmitCreditUpdate() {

    if (!this.creditupdateform.valid) {
      return false;
    } else {
      this.customerId = this.creditupdateform.value.customerId;
      this.creditamount = this.creditupdateform.value.creditamount;
      console.log(this.creditamount + " " + this.customerId);
      this.apiService.updatecreditLimit(this.customerId, this.creditamount).subscribe(
        (data) => {
          console.log(data)
          // this.creditupdateform.reset();
        }, (error) => {
       
          this.toastr.success('Sucessfully   Credit Amount Updated','',{
            timeOut: 2000
          });


        }, () => {

        }
      );
    }

  }
  onSubmitUpdatedays() {

    if (!this.creditupdatedaysform.valid) {
      return false;
    } else {
      this.salesId = this.creditupdatedaysform.value.salesId;
      this.creditDays = this.creditupdatedaysform.value.creditDays;
      console.log(this.salesId + " " + this.creditDays);
      this.apiService.updatecreditDays(this.salesId, this.creditDays).subscribe(
        (data) => {
          console.log(data)
          // this.creditupdatedaysform.reset();
        ;
        }, (error) => {
       
          this.toastr.success('Sucessfully   Credit Days Updated','',{
            timeOut: 2000
          });



        }, () => {

        }
      );
    }

  }

}
