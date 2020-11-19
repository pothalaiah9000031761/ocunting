import { Component, OnInit,ViewChild } from '@angular/core';

import Swal from'sweetalert2';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';
import { RegisterService } from 'src/app/services/register.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-warehouse-grouping-list-view',
  templateUrl: './warehouse-grouping-list-view.component.html',
  styleUrls: ['./warehouse-grouping-list-view.component.css']
})
export class WarehouseGroupingListViewComponent implements OnInit {

  allWareHouseGroupData:any;    
  GroupId:any;
  constructor(public http:RegisterService,
      private router :Router,
      private toastr: ToastrService){

  }

getData()
{
  this.http.listAllWarehouseGroups().subscribe((posResp)=>{
        this.allWareHouseGroupData=posResp;
        console.log(this.allWareHouseGroupData)

       

    },(errResp)=>{
        console.log(errResp)
  
  })
}
  
  ngOnInit(): void {

    this.getData();
      // this.http.listAllWarehouseGroups().subscribe((posResp)=>{
      //     this.allWareHouseGroupData=posResp;
      //     console.log(this.allWareHouseGroupData)

         

      // },(errResp)=>{
      //     console.log(errResp)
      // })

      }


      deletewarehouseGroup(id){
          
          console.log(id);

          // this.http.deleteWarehouseGroupById(id).subscribe((posResp)=>{
              // this.GroupId=posResp;

              Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  this.http.deleteWarehouseGroupById(id).subscribe((data)=>{
                  Swal.fire(
                    'Successfully Deleted',
                   
                  )
                  this.getData();
                  })
                }
              })
              console.log("deleted");

                  //             let ins= this.allWareHouseGroupData.findIndex((e,i)=>{
                  //                       return e.groupId===id;
                  //                     })
                  //                     this.allWareHouseGroupData.splice(ins,1);

                                     //console.log(ins)
          // },(errResp)=>{
          //     console.log(errResp)
          // }

      }


}
